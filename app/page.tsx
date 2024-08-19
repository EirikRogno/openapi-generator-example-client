import CreateUserCard from '@/components/createUserCard';
import { DataTableDemo } from '@/components/userTable';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CreateUserCard />
      <DataTableDemo />
    </main>
  );
}
