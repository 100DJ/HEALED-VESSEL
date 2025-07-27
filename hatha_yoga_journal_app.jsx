import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const poses = [
  {
    name: "Balasana (Child’s Pose)",
    quality: "Clarity",
    prompt: "What am I ready to see more clearly today?",
    affirmation: "I trust stillness to show me the truth."
  },
  {
    name: "Virabhadrasana I (Warrior I)",
    quality: "Bravery",
    prompt: "Where in my life is courage needed now?",
    affirmation: "I stand strong in my truth."
  },
  {
    name: "Ardha Chandrasana (Half Moon)",
    quality: "Creativity",
    prompt: "What idea or energy wants to move through me?",
    affirmation: "I am a channel for inspired creation."
  },
  {
    name: "Vrikshasana (Tree Pose)",
    quality: "Undivided Attention",
    prompt: "What deserves my full attention today?",
    affirmation: "Focus is my power."
  },
  {
    name: "Utkata Konasana (Goddess Pose)",
    quality: "Abundance",
    prompt: "Where do I already have enough?",
    affirmation: "I live in overflow."
  },
  {
    name: "Phalakasana (Plank Pose)",
    quality: "Productivity",
    prompt: "What one meaningful action will I complete today?",
    affirmation: "I move forward with purpose."
  },
  {
    name: "Setu Bandhasana (Bridge Pose)",
    quality: "Reciprocity",
    prompt: "Where can I give or receive more freely?",
    affirmation: "I am open to the flow of giving and receiving."
  },
  {
    name: "Cat-Cow Flow",
    quality: "Respond-ability",
    prompt: "How can I respond more mindfully today?",
    affirmation: "I choose my response with intention."
  },
  {
    name: "Parivrtta Trikonasana (Revolved Triangle)",
    quality: "Resourcefulness",
    prompt: "What hidden strength or skill can I use today?",
    affirmation: "Everything I need is within or around me."
  },
  {
    name: "Utkatasana (Chair Pose)",
    quality: "Momentum",
    prompt: "What small win today will build momentum tomorrow?",
    affirmation: "I am in motion, and I cannot be stopped."
  }
];

export default function YogaHabitApp() {
  const [day, setDay] = useState(1);
  const [journalEntry, setJournalEntry] = useState("");
  const [entries, setEntries] = useState([]);

  const poseIndex = (day - 1) % 10;
  const currentPose = poses[poseIndex];

  const handleSave = () => {
    setEntries([...entries, { day, journalEntry, pose: currentPose.name }]);
    setJournalEntry("");
    setDay(day + 1);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">100-Day Hatha Yoga Tracker</h1>
      <p className="text-center text-gray-500 mb-4">
        Your client can use this app by visiting it daily, completing the pose, journaling their reflection, and saving the entry. It automatically tracks their 100-day journey.
      </p>
      <Card>
        <CardContent className="space-y-2 p-4">
          <p className="text-sm text-gray-500">Day {day} - {currentPose.quality}</p>
          <h2 className="text-xl font-semibold">{currentPose.name}</h2>
          <p className="italic">Prompt: {currentPose.prompt}</p>
          <p className="text-green-700">Affirmation: "{currentPose.affirmation}"</p>
          <Textarea
            placeholder="Write your journal entry here..."
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            className="mt-2"
          />
          <Button onClick={handleSave} className="w-full">Save & Next Day</Button>
        </CardContent>
      </Card>

      <div className="pt-4">
        <h3 className="text-lg font-medium">Previous Entries</h3>
        {entries.length === 0 && <p className="text-sm text-gray-400">No entries yet. Start your journey today.</p>}
        {entries.map((entry, i) => (
          <Card key={i} className="mt-2">
            <CardContent className="p-2">
              <p className="text-sm font-semibold">Day {entry.day} - {entry.pose}</p>
              <p>{entry.journalEntry}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
