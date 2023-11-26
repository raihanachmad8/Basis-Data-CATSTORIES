DROP DATABASE FinalProjectBasdat;

CREATE DATABASE FinalProjectBasdat;

USE FinalProjectBasdat;

CREATE TABLE Pemasok(
	IDPemasok			INT				NOT NULL,
	NamaPemasok			VARCHAR(100)	NOT NULL,
	Alamat				TEXT			NOT NULL,
	NomorTelepon		VARCHAR(15)		NOT NULL,
	Email				NVARCHAR(255)	NOT NULL,
	PRIMARY KEY(IDPemasok)				
);

CREATE TABLE Produk(
	IDProduk			INT				NOT NULL,
	NamaProduk			VARCHAR(100)	NOT NULL,
	Deskripsi			TEXT			NOT NULL,
	Harga				Decimal			NOT NULL,
	JumlahStok			INT				NOT NULL,
	IDPemasok			INT				NOT NULL,
	PRIMARY KEY(IDProduk),
	FOREIGN KEY(IDPemasok) REFERENCES Pemasok(IDPemasok)
);

CREATE TABLE Pelanggan (
    IDPelanggan		INT				NOT NULL,
    NamaPelanggan	VARCHAR(100)	NOT NULL,
    Alamat			TEXT			NOT NULL,
    NomorTelepon	VARCHAR(15)		NOT NULL,
    Email			NVARCHAR(255)	NOT NULL,
	PRIMARY KEY(IDPelanggan)
);

CREATE TABLE TransaksiPenjualan (
    IDTransaksi			INT				NOT NULL,
    TanggalTransaksi	DATE			NOT NULL,
    TotalHarga			DECIMAL			NOT NULL,
    IDPelanggan			INT				NOT NULL,
	PRIMARY KEY(IDTransaksi),
    FOREIGN KEY (IDPelanggan) REFERENCES Pelanggan(IDPelanggan)
);

CREATE TABLE DetailTransaksi (
    IDDetailTransaksi	INT		NOT NULL,
    IDTransaksi			INT		NOT NULL,
    IDProduk			INT		NOT NULL,
    Jumlah				INT		NOT NULL,
    HargaSatuan			DECIMAL	NOT NULL,
	PRIMARY KEY(IDDetailTransaksi),
    FOREIGN KEY (IDTransaksi) REFERENCES TransaksiPenjualan(IDTransaksi),
    FOREIGN KEY (IDProduk) REFERENCES Produk(IDProduk)
);

CREATE TABLE CatatanTransaksi (
    IDCatatanTransaksi	INT				NOT NULL,
    IDTransaksi			INT				NOT NULL,
    Tindakan			VARCHAR(10)		NOT NULL,
	TabelSasaran		VARCHAR(50),
    IDRekamanSasaran	INT,
    Timestamp			TIMESTAMP		NOT NULL,
	PRIMARY KEY(IDCatatanTransaksi),
    FOREIGN KEY (IDTransaksi) REFERENCES TransaksiPenjualan(IDTransaksi)
);
