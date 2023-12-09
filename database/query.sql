USE [master];

IF EXISTS(SELECT * FROM sys.databases WHERE name = 'CATADOPT')
    DROP DATABASE [CATADOPT];

IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'CATADOPT')
    CREATE DATABASE [CATADOPT];

USE [CATADOPT];

-- Tabel Jenis
CREATE TABLE Jenis (
    ID_Jenis VARCHAR(50) PRIMARY KEY,
    Jenis_Kucing VARCHAR(50)
);

-- Tabel Kucing
CREATE TABLE Kucing (
    ID_Kucing VARCHAR(50) PRIMARY KEY,
    ID_Jenis VARCHAR(50),
    Nama_Kucing VARCHAR(50),
    Foto VARCHAR(100),
    Umur SMALLINT,
    Jenis_Kelamin VARCHAR(6) CHECK(Jenis_Kelamin IN('Jantan', 'Betina')),
    Tanggal_Masuk DATE,
    Biaya DECIMAL,
    Status VARCHAR(10) CHECK(Status IN('Tersedia', 'Tidak Tersedia')),
    Keterangan TEXT,
    FOREIGN KEY (ID_Jenis) REFERENCES Jenis(ID_Jenis)
);

-- Tabel Pembeli
CREATE TABLE Pembeli (
    ID_Pembeli VARCHAR(50) PRIMARY KEY,
    Nama_Pembeli VARCHAR(100),
    Email NVARCHAR(255),
    No_Telp VARCHAR(15),
    Alamat TEXT
);

-- Tabel Jenis Pengiriman
CREATE TABLE Jenis_Pengiriman (
    ID_Jenis_Pengiriman VARCHAR(50) PRIMARY KEY,
    Jenis_Pengiriman VARCHAR(20)
);

-- Tabel Metode Pembayaran
CREATE TABLE Metode_Pembayaran (
    ID_Metode_Pembayaran VARCHAR(50) PRIMARY KEY,
    Metode_Pembayaran VARCHAR(20)
);

-- Tabel Transaksi
CREATE TABLE Transaksi (
    ID_Transaksi VARCHAR(50) PRIMARY KEY,
    ID_Pembeli VARCHAR(50),
    ID_Jenis_Pengiriman VARCHAR(50),
    ID_Metode_Pembayaran VARCHAR(50),
    Total_Biaya DECIMAL,
    Nomor_Resi VARCHAR(30),
    Tanggal_Transaksi DATE,
    Pesan TEXT,
    FOREIGN KEY (ID_Pembeli) REFERENCES Pembeli(ID_Pembeli),
    FOREIGN KEY (ID_Jenis_Pengiriman) REFERENCES Jenis_Pengiriman(ID_Jenis_Pengiriman),
    FOREIGN KEY (ID_Metode_Pembayaran) REFERENCES Metode_Pembayaran(ID_Metode_Pembayaran)
);

-- Tabel Detail_Transaksi
CREATE TABLE Detail_Transaksi (
    ID_Detail_Transaksi VARCHAR(50) PRIMARY KEY,
    ID_Transaksi VARCHAR(50),
    ID_Kucing VARCHAR(50),
    FOREIGN KEY (ID_Kucing) REFERENCES Kucing(ID_Kucing)
);
