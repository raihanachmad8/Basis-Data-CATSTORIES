USE [master];

IF EXISTS(SELECT * FROM sys.databases WHERE name = 'CATADOPT')
    DROP DATABASE [CATADOPT];

IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'CATADOPT')
    CREATE DATABASE [CATADOPT];

USE [CATADOPT];

-- Tabel: Jenis
CREATE TABLE Jenis (
    ID_Jenis    VARCHAR(50)     PRIMARY KEY,
    Nama        VARCHAR(100)    NOT NULL
);

-- Tabel: Kucing
CREATE TABLE Kucing (
    ID_Kucing       VARCHAR(50)     PRIMARY KEY,
    ID_Jenis        VARCHAR(50)     REFERENCES Jenis(ID_Jenis),
    Nama            VARCHAR(50)     NOT NULL,
    Foto            VARCHAR(100)    NOT NULL,
    Umur            SMALLINT        NOT NULL, --Bulan
    Jenis_Kelamin   VARCHAR(6)      NOT NULL    CHECK(Jenis_Kelamin IN('Jantan', 'Betina')),
    Tanggal_Masuk   DATE            NOT NULL,
    Biaya           DECIMAL         NOT NULL,
    Status          VARCHAR(10)     NOT NULL    CHECK(Status IN('Tersedia', 'Tidak Tersedia')),
    Keterangan      TEXT
);

-- Tabel: Alamat
CREATE TABLE Alamat (
    ID_Alamat       VARCHAR(50) PRIMARY KEY,
    Jalan           TEXT        NOT NULL,
    Kota            VARCHAR(50) NOT NULL,
    Provinsi        VARCHAR(50) NOT NULL,
    Kode_Pos        CHAR(5)     NOT NULL
);

-- Tabel: Pembeli
CREATE TABLE Pembeli (
    ID_Pembeli     VARCHAR(50)      PRIMARY KEY,
    ID_Alamat      VARCHAR(50)      REFERENCES Alamat(ID_Alamat),
    Nama           VARCHAR(100)     NOT NULL,
    Email          NVARCHAR(255)    NOT NULL,
    No_Telp        VARCHAR(15)      NOT NULL
);

-- Tabel: Pengiriman
CREATE TABLE Pengiriman (
    ID_Pengiriman       VARCHAR(50)     PRIMARY KEY,
    ID_Alamat           VARCHAR(50)     REFERENCES Alamat(ID_Alamat),
    Jenis_Pengiriman    VARCHAR(10)     NOT NULL    CHECK(Jenis_Pengiriman IN('Ambil Toko', 'Kirim'))  ,
    Nomor_Resi          VARCHAR(30)
);

-- Tabel: Pembayaran
CREATE TABLE Pembayaran (
    ID_Pembayaran       VARCHAR(50) PRIMARY KEY,
    Metode_Pembayaran   VARCHAR(10) NOT NULL        CHECK(Metode_Pembayaran IN('Cash', 'Transfer')),
    Total_Biaya         DECIMAL     NOT NULL
);

-- Tabel: Transaksi
CREATE TABLE Transaksi (
    ID_Transaksi        VARCHAR(50) PRIMARY KEY,
    ID_Pembeli          VARCHAR(50) REFERENCES Pembeli(ID_Pembeli),
    ID_Pengiriman       VARCHAR(50) REFERENCES Pengiriman(ID_Pengiriman),
    ID_Pembayaran       VARCHAR(50) REFERENCES Pembayaran(ID_Pembayaran),
    Tanggal_Transaksi   DATE        NOT NULL,
    Pesan               TEXT
);

-- Tabel: Detail_Transaksi
CREATE TABLE Detail_Transaksi (
    ID_Detail_Transaksi VARCHAR(50) PRIMARY KEY,
    ID_Transaksi        VARCHAR(50) NOT NULL    REFERENCES Transaksi(ID_Transaksi),
    ID_Kucing           VARCHAR(50) REFERENCES Kucing(ID_Kucing)
);
