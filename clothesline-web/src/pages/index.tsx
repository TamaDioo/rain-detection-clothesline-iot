import Head from "next/head";
import Link from "next/link";
import { FaCloudSun, FaArrowRight, FaWind, FaTint } from "react-icons/fa";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Smart Clothesline IoT | Solusi Jemuran Pintar</title>
        <meta
          name="description"
          content="Jemuran Otomatis Berbasis IoT yang memantau cuaca dan mengamankan pakaian Anda dari hujan."
        />
      </Head>

      <div
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col overflow-x-hidden`}
      >
        {/* Navbar */}
        <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-indigo-600">
            <FaCloudSun className="text-3xl" />
            <span className="text-xl font-bold tracking-tight">
              ClothesLine
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/auth/login"
              className="px-4 sm:px-5 py-2 font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors shadow-sm hidden sm:flex items-center"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 lg:py-20 flex-1 flex items-center justify-center">
          <section className="w-full max-w-4xl text-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
              </span>
              Sistem IoT Aktif & Siaga
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Jemuran Pintar, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-emerald-500">
                Pakaian Selalu Aman.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed mx-auto">
              Tidak perlu khawatir jemuran basah saat hujan turun tiba-tiba.
              Smart Clothesline mendeteksi cuaca secara real-time dan
              mengamankan pakaian Anda secara otomatis.
            </p>

            <div className="mx-auto w-full max-w-2xl flex flex-col sm:flex-row sm:justify-center items-stretch sm:items-center gap-4">
              <Link
                href="/homepage"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-200 w-full sm:w-auto sm:min-w-55"
              >
                Lihat Dashboard <FaArrowRight />
              </Link>
              <Link
                href="/auth/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 text-lg font-semibold rounded-full hover:bg-slate-50 transition-all shadow-sm w-full sm:w-auto sm:min-w-55"
              >
                Mulai Sekarang
              </Link>
            </div>
          </section>
        </main>

        {/* Feature Highlights */}
        <div className="w-full bg-white border-t border-slate-100 py-14 md:py-16 shrink-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center">
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-100 bg-slate-50/70 h-full">
              <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-4">
                <FaTint />
              </div>
              <h3 className="text-xl font-bold mb-2">Sensor Hujan Cepat</h3>
              <p className="text-slate-500">
                Mendeteksi rintik hujan pertama dan menarik jemuran dalam
                hitungan detik.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-100 bg-slate-50/70 h-full">
              <div className="h-16 w-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center text-2xl mb-4">
                <FaCloudSun />
              </div>
              <h3 className="text-xl font-bold mb-2">Analisis Cuaca</h3>
              <p className="text-slate-500">
                Dilengkapi sensor cahaya dan suhu untuk memaksimalkan efisiensi
                pengeringan.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-100 bg-slate-50/70 h-full">
              <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-4">
                <FaWind />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Monitoring</h3>
              <p className="text-slate-500">
                Pantau dan kendalikan status jemuran dari mana saja melalui
                Dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* <footer className="w-full bg-slate-900 text-slate-400 py-8 text-center text-sm shrink-0">
          <p>
            © {new Date().getFullYear()} PBL Kelompok TI-3F Polinema. All rights
            reserved.
          </p>
        </footer> */}
      </div>
    </>
  );
}
