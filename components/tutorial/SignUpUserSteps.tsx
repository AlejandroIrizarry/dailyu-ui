import Link from "next/link";
import Step from "./Step";

export default function SignUpUserSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <Step title="Create your account">
        <p>
          Head over to the{" "}
          <Link
            href="/login"
            className="font-bold hover:underline text-foreground/80"
          >
            Login
          </Link>{" "}
          page and sign up to start using DailyU.
        </p>
      </Step>
      <Step title="Start tracking">
        <p>
          Once authenticated, start tracking your daily tasks and keep yourself{" "}
          <Link
            href="/tasks"
            className="font-bold hover:underline text-foreground/80"
          >
            organized
          </Link>{" "}
          every single day.
        </p>
      </Step>
    </ol>
  );
}
