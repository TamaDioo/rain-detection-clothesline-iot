"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings } from "lucide-react"

export default function SystemLogsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between w-full px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>System Logs</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <ModeToggle />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6 pt-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-lg">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">System Logs</h1>
              <p className="text-muted-foreground">Hardware connectivity and error tracking.</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>ESP32 Diagnostic Logs</CardTitle>
              <CardDescription>Event traces for servo actions and sensor failures.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black/90 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div>[2026-04-29 08:12:33] INFO: MQTT Connected to Broker</div>
                <div>[2026-04-29 08:12:35] INFO: Sensor DHT22 Initialized</div>
                <div>[2026-04-29 08:12:35] INFO: Sensor LDR Initialized</div>
                <div>[2026-04-29 08:12:35] INFO: Rain Sensor Initialized</div>
                <div className="text-zinc-400">[2026-04-29 09:00:00] DEBUG: Mode set to AUTO</div>
                <div className="text-blue-400">[2026-04-29 10:15:22] EVENT: Rain detected. Retracting Servo.</div>
                <div className="text-zinc-400">[2026-04-29 10:15:25] DEBUG: Servo position: 0 (Retracted)</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
