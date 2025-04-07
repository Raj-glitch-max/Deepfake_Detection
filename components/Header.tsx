export default function Header() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold text-center">
        Welcome to the Protected Page!
      </h1>
      <p className="text-sm text-muted-foreground text-center">
        You are successfully logged in.
      </p>
    </div>
  );
}
