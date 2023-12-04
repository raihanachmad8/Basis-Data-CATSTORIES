-- Tabel Jenis
CREATE TABLE Jenis (
    ID_Jenis VARCHAR(10) PRIMARY KEY,
    Nama VARCHAR(100)
);

-- Tabel Kucing
CREATE TABLE Kucing (
    ID_Kucing VARCHAR(10) PRIMARY KEY,
    Foto VARCHAR(50),
    Umur INT,
    Tanggal_Masuk DATE,
    Harga DECIMAL,
    Status VARCHAR(10) CHECK(Status IN ('Tersedia', 'Terjual')),
    ID_Jenis VARCHAR(10) REFERENCES Jenis(ID_Jenis),
    Keterangan TEXT
);

-- Tabel Pembeli
CREATE TABLE Pembeli (
    ID_Pembeli VARCHAR(10) PRIMARY KEY,
    Nama VARCHAR(100),
    No_Telp VARCHAR(15),
    Alamat TEXT
);

-- Tabel Transaksi
CREATE TABLE Transaksi (
    ID_Transaksi VARCHAR(10) PRIMARY KEY,
    ID_Pembeli VARCHAR(10) REFERENCES Pembeli(ID_Pembeli),
    Pembayaran VARCHAR(10) CHECK(Pembayaran IN ('Cash', 'Transfer')),
    Pengiriman VARCHAR(10) CHECK(Pengiriman IN ('Ambil Toko', 'Kirim')),
    Tanggal_Transaksi DATE,
    Total_Harga DECIMAL,
    Pesan TEXT
);

-- Tabel Detail_Transaksi
CREATE TABLE Detail_Transaksi (
    ID_DetailTrc VARCHAR(10) PRIMARY KEY,
    ID_Kucing VARCHAR(10) REFERENCES Kucing(ID_Kucing),
    ID_Transaksi VARCHAR(10) REFERENCES Transaksi(ID_Transaksi),
    Jumlah INT
);
