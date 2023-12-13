import UserProfile from "@/components/UserProfile/UserProfile";

interface PageUserProps {
  params: {
    id: string;
  };
}

export default function PageUser({ params: { id } }: PageUserProps) {
  return (
    <main>
      <h2>Профиль пользователя</h2>
      <UserProfile id={id}/>
    </main>
  );
}
