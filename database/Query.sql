CREATE DATABASE CATADOPT;

USE CATADOPT;

-- Tabel: Jenis
CREATE TABLE Jenis (
    ID_Jenis	VARCHAR(10) PRIMARY KEY,
    Nama		VARCHAR(100)
);

-- Tabel: Kucing
CREATE TABLE Kucing (
    ID_Kucing		VARCHAR(10) PRIMARY KEY,
    Foto			VARCHAR(50),
    Umur			INT,
    Tanggal_Masuk	DATE,
    Harga			DECIMAL,
    Status			VARCHAR(10) CHECK(Status IN ('Tersedia', 'Terjual')),
    ID_Jenis		VARCHAR(10),
    Keterangan		TEXT,
    FOREIGN KEY (ID_Jenis) REFERENCES Jenis(ID_Jenis)
);

-- Tabel: Pembeli
CREATE TABLE Pembeli (
    ID_Pembeli		VARCHAR(10) PRIMARY KEY,
    Nama			VARCHAR(100),
    No_Telp			VARCHAR(15),
    Alamat			TEXT
);

-- Tabel: Transaksi
CREATE TABLE Transaksi (
    ID_Transaksi		VARCHAR(10) PRIMARY KEY,
    ID_Pembeli			VARCHAR(10),
    Pembayaran			VARCHAR(10) CHECK(Pembayaran IN ('Cash', 'Transfer')),
    Pengiriman			VARCHAR(10) CHECK(Pengiriman IN ('Ambil Toko', 'Kirim')),
    Tanggal_Transaksi	DATE,
    Pesan				TEXT,
    FOREIGN KEY (ID_Pembeli) REFERENCES Pembeli(ID_Pembeli)
);

-- Tabel: Detail_Transaksi
CREATE TABLE Detail_Transaksi (
    ID_DetailTrc	VARCHAR(10) PRIMARY KEY,
    ID_Kucing		VARCHAR(10),
    ID_Transaksi	VARCHAR(10),
    Jumlah			INT,
    FOREIGN KEY (ID_Kucing) REFERENCES Kucing(ID_Kucing),
    FOREIGN KEY (ID_Transaksi) REFERENCES Transaksi(ID_Transaksi)
);


