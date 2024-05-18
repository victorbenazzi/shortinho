import Container from "./components/Container";
import Header from "./components/Header";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Link } from "@geist-ui/react-icons";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Container>
        <main className="flex items-center flex-col gap-y-4 mt-12">
          <img
            src="/logo-shortinho-500.png"
            width="48"
            alt="Shortinho encurtador de links"
          />
          <h1 className="text-5xl font-bold w-[500px] text-center text-neutral-800">
            Links curtinhos iguais a um{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              shortinho
            </span>
          </h1>
          <div className="flex w-full max-w-[500px] items-center gap-x-2 mt-4">
            <Input
              type="url"
              id="long-url"
              placeholder="Digite ou cole o link para ser encurtado..."
            />

            <Button className="flex gap-x-2">
              <Link size={16} />
              Encurtar
            </Button>
          </div>
        </main>
      </Container>
    </div>
  );
}

export default App;
