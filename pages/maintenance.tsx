export default function Maintenance() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6">
      <div className="text-6xl mb-4 animate-bounce">🚧</div>
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">
        Situs Sedang Dalam Perbaikan
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-xl text-center">
        Kami sedang melakukan maintenance untuk meningkatkan kualitas layanan.
        Mohon maaf atas ketidaknyamanannya. Silakan kembali beberapa saat lagi.
      </p>
    </div>
  );
}
