-- Tabel Pemasok
INSERT INTO Pemasok (IDPemasok, NamaPemasok, Alamat, NomorTelepon, Email)
VALUES
(101, 'Pemasok A', 'Alamat A', '123456789', 'pemasokA@email.com'),
(102, 'Pemasok B', 'Alamat B', '987654321', 'pemasokB@email.com'),
(103, 'Pemasok C', 'Alamat C', '111222333', 'pemasokC@email.com'),
(104, 'Pemasok D', 'Alamat D', '444555666', 'pemasokD@email.com'),
(105, 'Pemasok E', 'Alamat E', '777888999', 'pemasokE@email.com');

-- Tabel Produk
INSERT INTO Produk (IDProduk, NamaProduk, Deskripsi, Harga, JumlahStok, IDPemasok)
VALUES
(201, 'Produk A', 'Deskripsi A', 50.00, 100, 101),
(202, 'Produk B', 'Deskripsi B', 75.00, 150, 102),
(203, 'Produk C', 'Deskripsi C', 100.00, 200, 103),
(204, 'Produk D', 'Deskripsi D', 120.00, 50, 104),
(205, 'Produk E', 'Deskripsi E', 80.00, 120, 105);

-- Tabel Pelanggan
INSERT INTO Pelanggan (IDPelanggan, NamaPelanggan, Alamat, NomorTelepon, Email)
VALUES
(301, 'Pelanggan A', 'Alamat A', '111111111', 'pelangganA@email.com'),
(302, 'Pelanggan B', 'Alamat B', '222222222', 'pelangganB@email.com'),
(303, 'Pelanggan C', 'Alamat C', '333333333', 'pelangganC@email.com'),
(304, 'Pelanggan D', 'Alamat D', '444444444', 'pelangganD@email.com'),
(305, 'Pelanggan E', 'Alamat E', '555555555', 'pelangganE@email.com');

-- Tabel TransaksiPenjualan
INSERT INTO TransaksiPenjualan (IDTransaksi, TanggalTransaksi, TotalHarga, IDPelanggan)
VALUES
(401, '2023-01-01', 200.00, 301),
(402, '2023-02-01', 150.00, 302),
(403, '2023-03-01', 300.00, 303),
(404, '2023-04-01', 240.00, 304),
(405, '2023-05-01', 180.00, 305);

-- Tabel DetailTransaksi
INSERT INTO DetailTransaksi (IDDetailTransaksi, IDTransaksi, IDProduk, Jumlah, HargaSatuan)
VALUES
(501, 401, 201, 5, 50.00),
(502, 402, 202, 3, 25.00),
(503, 403, 203, 2, 150.00),
(504, 404, 204, 4, 60.00),
(505, 405, 205, 6, 30.00);

-- Tabel CatatanTransaksi
INSERT INTO CatatanTransaksi (IDCatatanTransaksi, IDTransaksi, Tindakan, TabelSasaran, IDRekamanSasaran, Timestamp)
VALUES
(601, 401, 'Insert', 'Produk', 501, CURRENT_TIMESTAMP),
(602, 402, 'Update', 'Pemasok', 502, CURRENT_TIMESTAMP),
(603, 403, 'Delete', 'Pelanggan', 503, CURRENT_TIMESTAMP),
(604, 404, 'Insert', 'DetailTransaksi', 504, CURRENT_TIMESTAMP),
(605, 405, 'Update', 'TransaksiPenjualan', 505, CURRENT_TIMESTAMP);
