INSERT INTO Pemasok (IDPemasok, NamaPemasok, Alamat, NomorTelepon, Email)
VALUES
(1, 'Pemasok A', 'Alamat A', '123456789', 'pemasokA@email.com'),
(2, 'Pemasok B', 'Alamat B', '987654321', 'pemasokB@email.com'),
(3, 'Pemasok C', 'Alamat C', '111222333', 'pemasokC@email.com'),
(4, 'Pemasok D', 'Alamat D', '444555666', 'pemasokD@email.com'),
(5, 'Pemasok E', 'Alamat E', '777888999', 'pemasokE@email.com');

INSERT INTO Produk (IDProduk, NamaProduk, Deskripsi, Harga, JumlahStok, IDPemasok)
VALUES
(1, 'Produk A', 'Deskripsi A', 50.00, 100, 1),
(2, 'Produk B', 'Deskripsi B', 75.00, 150, 2),
(3, 'Produk C', 'Deskripsi C', 100.00, 200, 3),
(4, 'Produk D', 'Deskripsi D', 120.00, 50, 4),
(5, 'Produk E', 'Deskripsi E', 80.00, 120, 5);

INSERT INTO Pelanggan (IDPelanggan, NamaPelanggan, Alamat, NomorTelepon, Email)
VALUES
(1, 'Pelanggan A', 'Alamat A', '111111111', 'pelangganA@email.com'),
(2, 'Pelanggan B', 'Alamat B', '222222222', 'pelangganB@email.com'),
(3, 'Pelanggan C', 'Alamat C', '333333333', 'pelangganC@email.com'),
(4, 'Pelanggan D', 'Alamat D', '444444444', 'pelangganD@email.com'),
(5, 'Pelanggan E', 'Alamat E', '555555555', 'pelangganE@email.com');

INSERT INTO TransaksiPenjualan (IDTransaksi, TanggalTransaksi, TotalHarga, IDPelanggan)
VALUES
(1, '2023-01-01', 200.00, 1),
(2, '2023-02-01', 150.00, 2),
(3, '2023-03-01', 300.00, 3),
(4, '2023-04-01', 240.00, 4),
(5, '2023-05-01', 180.00, 5);

INSERT INTO DetailTransaksi (IDDetailTransaksi, IDTransaksi, IDProduk, Jumlah, HargaSatuan)
VALUES
(1, 1, 1, 5, 50.00),
(2, 2, 2, 3, 25.00),
(3, 3, 3, 2, 150.00),
(4, 4, 4, 4, 60.00),
(5, 5, 5, 6, 30.00);

INSERT INTO CatatanTransaksi (IDCatatanTransaksi, IDTransaksi, Tindakan, TabelSasaran, IDRekamanSasaran, Timestamp)
VALUES
(1, 1, 'Insert', 'Produk', 1, CURRENT_TIMESTAMP),
(2, 2, 'Update', 'Pemasok', 2, CURRENT_TIMESTAMP),
(3, 3, 'Delete', 'Pelanggan', 3, CURRENT_TIMESTAMP),
(4, 4, 'Insert', 'DetailTransaksi', 4, CURRENT_TIMESTAMP),
(5, 5, 'Update', 'TransaksiPenjualan', 5, CURRENT_TIMESTAMP);
