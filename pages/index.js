import ImageViewer from "../component/ImageViewer";

const data = [
  {
    holboos: "/haaduud/chinghisKhan",
    hayag: "/chingis.jpeg",
    ner: "1. Dschingis Khan",
  },
  {
    holboos: "/haaduud/ugudeiKhaan",
    hayag: "/Ugudei.jpeg",
    ner: "2. Ögedei Khan",
  },
  {
    holboos: "https://de.wikipedia.org/wiki/G%C3%BCy%C3%BCk_Khan",
    hayag: "/guyug.jpeg",
    ner: "3. Güyük Khan",
  },
  {
    holboos: "https://de.wikipedia.org/wiki/M%C3%B6ngke_Khan",
    hayag: "/munkh.jpeg",
    ner: "4. Möngke Khan",
  },
  {
    holboos: "https://de.wikipedia.org/wiki/Kublai_Khan",
    hayag: "/khubilai.jpeg",
    ner: "5. Kublai Khan",
  },
  {
    holboos: "https://de.wikipedia.org/wiki/Timur_Khan",
    hayag: "/tumur.jpeg",
    ner: "6. Temür Khan",
  },
  {
    holboos: "https://de.wikipedia.org/wiki/K%C3%BCl%C3%BCq_Khan",
    hayag: "/haisan.jpeg",
    ner: "7. Külüq Khan",
  },
  {
    holboos: "https://de.wikipedia.org/wiki/Buyantu_Khan",
    hayag: "/ayurbarbad.jpeg",
    ner: "8. Buyantu Khan",
  },
  {
    holboos: "https://en.wikipedia.org/wiki/Gegeen_Khan",
    hayag: "/shadbal.jpeg",
    ner: "9. Gegeen Khan",
  },
  {
    holboos: "https://de.wikipedia.org/wiki/Yesun_Timur_Khan",
    hayag: "/yusuntumur.jpeg",
    ner: "10. Yesun Timur Khan",
  },
];

export default function Home() {
  return (
    <div class="justify-content-center row d-flex flex-row flex-wrap">
      {data.map((item) => (
        <ImageViewer {...item} />
      ))}
    </div>
  );
}
