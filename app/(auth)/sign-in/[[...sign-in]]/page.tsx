import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="h-full flex items-center justify-center py-16">
      <SignIn />;
    </div>
  );
}
