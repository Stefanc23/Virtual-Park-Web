import React from "react";
import Banner from "./Banner";
import MuseumBanner from "./images/museum banner.jpg";

function AboutMuseum() {

    return (
        <div className="about-museum dark-section m-0 p-0 h-100">
            <Banner banner={MuseumBanner} />
            <h1>Satwa Purba Hidup Kembali</h1>
            <p>
                Tidak kurang dari 1.000 spesies satwa liar dan 10.000 serangga dapat disaksikan di museum satwa terbesar dan terlengkap di Indonesia! Menelusuri sejarah dunia lewat replika tulang-belulang dinosaurus, evolusi mamalia selama ratusan tahun, hingga menyaksikan lebih dekat serangga kecil yang luput dari mata manusia.
            </p>
            <h3>Ada Apa di Museum Satwa?</h3>
            <p>
                Diorama satwa prasejarah, predator dari Kutub, spesies serangga yang diawetkan, hingga variasi burung yang terbang di atas kita. Museum Satwa menyajikan satwa-satwa yang diawetkan dalam habitat aslinya sehingga kita bisa mengamati mereka lebih dekat. Tak hanya secara visual, setiap binatang diberikan keterangan spesifik yang membantu memahami mereka..
            </p>
        </div>
    );
}

export default AboutMuseum;