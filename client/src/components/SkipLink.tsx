export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-4 left-4 z-[100] -translate-y-[150%] bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-xl transition-transform focus:translate-y-0 focus:outline-none focus:ring-4 focus:ring-primary/50"
    >
      Saltar para conteúdo principal
    </a>
  );
}