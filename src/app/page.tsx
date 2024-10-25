import RadioGroup from "./_components/radioGroup";

export default function Home() {
  const a = ["EN", "KR"] as const;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <RadioGroup list={a} defaultValue="KR" name="language" />
      </div>
    </main>
  );
}
