export const dynamic = "force-dynamic";

const HomePage = async () => {
  const res = await fetch(`${process.env.BASE_URL}/users`);
  if (!res.ok) {
    throw new Error("Error");
  }

  const usersData = await res.json();

  return (
    <div className="p-10">
      {usersData.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  );
};

export default HomePage;
