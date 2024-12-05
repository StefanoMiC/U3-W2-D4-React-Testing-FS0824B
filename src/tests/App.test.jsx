// Qui dentro scriveremo i nostri test per App e (per comodità) creeremo anche gli altri in questa cartella "tests"
// i file devono chiamarsi obbligatoriamente *.test.jsx, *.spec.jsx

// import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

// sequenza dei passaggi per effettuare un test in modo corretto è:
// 1) Renderizzazione del componente da testare (nel Virtual DOM)
// 2) Individuazione degli elementi con cui interagire (selezione tramite metodi get(All)by, query(All)by, find(All)by... )
// 3) (OZIONALE) Esecuzione di eventuali interazioni con gli elementi (es. click, type, dblClick, drop... ecc...)
// 4) La verifica delle aspettative, analizzando i risultati ottenuti

// creazione del gruppo di test (chiamata Suite) tramite il metodo describe
// ogni suite si rifersce ad una certa cosa da testare, con più modalità e quindi più test specifici

// describe("", () => {})
describe("looks for h1 in the page", () => {
  // qui dentro inseriremo TUTTI i test relativi alla ricerca dell'h1 nella pagina
  // per creare un singolo test si usa la funzione "test" oppure più comunemente "it"

  it("mounts the h1 correctly", () => {
    //1) Montiamo il componente nel DOM Virtuale
    render(<App />);
    //screen.debug(); // visualizziamo il contenuto del componente nella console (NON NECESSARIO)

    // 2) andiamo a cercare l'elemento tramite il suo contenuto testuale
    const heading = screen.getByText(/a simple react-test example/i);
    // screen.debug(heading); // visualizza l'elemento in forma di tag con tutti gli attributi eventuali (preferibile)
    // console.log(heading); // visualizza solo il nodo in forma di oggetto
    // 3) skip, non ci interessa un'interazione con questo elemento
    // 4) verifica delle aspeettative con dei metodi chiamati "matchers"
    expect(heading).toBeInTheDocument();
  });

  // test per verificare l'assenza dell'h1 nella pagina
  // it("looks for the abscence of h1 in the document", () => {
  //   render(<App />);
  //   const heading = screen.queryByText(/a simple react-test example/i);
  //   expect(heading).toBeNull();
  // });

  // test per verificare la presenza di un colore di bordo sull'h1
  it("checks h1 to have a red border", () => {
    render(<App />);
    const heading = screen.getByText(/a simple react-test example/i);
    expect(heading).toBeInTheDocument();
    expect(heading.style.borderColor).toBe("red");
  });
});

describe("verifies checkbox functionality", () => {
  it("looks for the unchecked status of a checkbox by default", () => {
    render(<App />);
    const input = screen.getByLabelText(/check me out/i);
    expect(input).toBeInTheDocument();

    expect(input).not.toBeChecked();
  });

  it("looks for the status change on the clicked checkbox", () => {
    // 1)
    render(<App />);
    // 2)
    const input = screen.getByLabelText(/check me out/i);
    // 3)
    fireEvent.click(input);

    // 4) verifichiamo che dopo il click il valore dello stato checked della checkbox passi a true
    expect(input).toBeChecked();
  });
});
