import React from "react";
import Banner from "./Banner";
import ZooBanner from "./images/About/zoo banner.jpg";

function AboutZoo() {

    return (
        <div className="about-zoo light-section">
            <Banner banner={ZooBanner} />
            <p>
                Batu Secret Zoo adalah tempat wisata dan konservasi satwa modern yang terletak di Kota Batu, Jawa Timur. Di lahan seluas 14 hektar, pengunjung dapat melihat dari dekat berbagai satwa yang habitatnya tersebar di seluruh dunia, dari hutan tropis Asia, padang gurun Afrika hingga dasar Samudera Pasifik.
            </p>
            <div className="zoo-vision">
                <h2>VISION</h2>
                <ul>
                    <li>Membangun jalur karir bagi semua staf lewat pengembangan keterampilan & kapasitas yang dilalui dengan pendidikan internal (in-house) dan pelatihan formal</li>
                    <li>Konservasi spesies langka secara ex-situ dengan kemungkinan re-introduksi ke populasi in-situ</li>
                    <li>Menjadi kebun binatang yang lestari (sustainable) dalam hal pengelolaan populasi satwa, staf, finansial dan lingkungan</li>
                    <li>Menjalin hubungan manusia dengan alam melalui pengalaman akan kebun binatang dan ilmu alam.</li>
                    <li>Memastikan semua hewan di Batu Secret Zoo memiliki tingkat kesehatan dan kesejahteraan yang baik.</li>
                </ul>
            </div>
            <div className="zoo-mission">
                <h2>MISSION</h2>
                <ul>
                    <li>Membangun jalur karir bagi semua staf lewat pengembangan keterampilan & kapasitas yang dilalui dengan pendidikan internal (in-house) dan pelatihan formal</li>
                    <li>Konservasi spesies langka secara ex-situ dengan kemungkinan re-introduksi ke populasi in-situ</li>
                    <li>Menjadi kebun binatang yang lestari (sustainable) dalam hal pengelolaan populasi satwa, staf, finansial dan lingkungan</li>
                    <li>Menjalin hubungan manusia dengan alam melalui pengalaman akan kebun binatang dan ilmu alam.</li>
                    <li>Memastikan semua hewan di Batu Secret Zoo memiliki tingkat kesehatan dan kesejahteraan yang baik.</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutZoo;