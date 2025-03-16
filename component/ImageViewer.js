import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

function ImageViewer(props) {
  return (
    <div class="p-5 col-6 col-sm-5 col-md-4 col-lg-3 card bg-transparent">
      <Link href={props.holboos} className={styles.zoom}>
        <Image
          src={props.hayag}
          class="card-img-top rounded-3"
          alt="chinggis"
          width={210}
          height={270}
        />
      </Link>
      <div class="card-body">
        <p class="card-text text-center h3">{props.ner}</p>
      </div>
    </div>
  );
}

export default ImageViewer;
