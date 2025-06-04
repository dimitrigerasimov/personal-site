export default function ResumePage() {
    return (
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Dimitri Gerasimov - Resume</h1>
  
        <embed
        src="/resume.pdf"
        type="application/pdf"
        width="100%"
        height="800px"
      />
      </main>
    );
}