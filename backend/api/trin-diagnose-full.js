
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { symptoms, name } = req.body;
    const response = {
      name: name || "Patient",
      analysis: "Initial scan complete.",
      recommendation: "Schedule follow-up diagnostics.",
      audioURL: "/placeholder-voice.mp3"
    };
    return res.status(200).json(response);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
