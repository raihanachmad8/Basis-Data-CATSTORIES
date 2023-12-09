USE CATADOPT;

-- Tabel Jenis
INSERT INTO Jenis (ID_Jenis, Jenis_Kucing) VALUES
('J1', 'Persia'),
('J2', 'Maine Coon'),
('J3', 'Siamese'),
('J4', 'Sphynx'),
('J5', 'Bengal'),
('J6', 'Ragdoll'),
('J7', 'Scottish Fold'),
('J8', 'British Shorthair'),
('J9', 'Abyssinian'),
('J10', 'Russian Blue');

-- Tabel Kucing
INSERT INTO Kucing (ID_Kucing, ID_Jenis, Nama_Kucing, Foto, Umur, Jenis_Kelamin, Tanggal_Masuk, Biaya, Status, Keterangan) VALUES
('K1', 'J1', 'Fluffy', 'fluffy.jpg', 2, 'Jantan', '2023-01-01', 200.00, 'Tersedia', 'Deskripsi Fluffy'),
('K2', 'J2', 'Mittens', 'mittens.jpg', 1, 'Betina', '2023-02-01', 150.00, 'Tersedia', 'Deskripsi Mittens'),
('K3', 'J4', 'Whiskers', 'whiskers.jpg', 3, 'Jantan', '2023-03-01', 180.00, 'Tersedia', 'Deskripsi Whiskers'),
('K4', 'J4', 'Leo', 'leo.jpg', 2, 'Jantan', '2023-04-01', 220.00, 'Tersedia', 'Deskripsi Leo'),
('K5', 'J5', 'Nala', 'nala.jpg', 1, 'Betina', '2023-05-01', 170.00, 'Tersedia', 'Deskripsi Nala'),
('K6', 'J1', 'Smokey', 'smokey.jpg', 2, 'Jantan', '2023-06-01', 180.00, 'Tersedia', 'Deskripsi Smokey'),
('K7', 'J1', 'Luna', 'luna.jpg', 1, 'Betina', '2023-07-01', 160.00, 'Tersedia', 'Deskripsi Luna'),
('K8', 'J2', 'Oreo', 'oreo.jpg', 3, 'Jantan', '2023-08-01', 200.00, 'Tersedia', 'Deskripsi Oreo'),
('K9', 'J4', 'Cleo', 'cleo.jpg', 2, 'Betina', '2023-09-01', 190.00, 'Tersedia', 'Deskripsi Cleo'),
('K10', 'J5', 'Simba', 'simba.jpg', 1, 'Jantan', '2023-10-01', 170.00, 'Tersedia', 'Deskripsi Simba'),
('K11', 'J1', 'Whiskey', 'whiskey.jpg', 2, 'Jantan', '2023-11-01', 180.00, 'Tersedia', 'Deskripsi Whiskey'),
('K12', 'J2', 'Mocha', 'mocha.jpg', 1, 'Betina', '2023-11-15', 160.00, 'Tersedia', 'Deskripsi Mocha'),
('K13', 'J3', 'Nacho', 'nacho.jpg', 3, 'Jantan', '2023-12-01', 200.00, 'Tersedia', 'Deskripsi Nacho'),
('K14', 'J4', 'Sasha', 'sasha.jpg', 2, 'Betina', '2023-12-15', 190.00, 'Tersedia', 'Deskripsi Sasha'),
('K15', 'J5', 'Felix', 'felix.jpg', 1, 'Jantan', '2024-01-01', 170.00, 'Tersedia', 'Deskripsi Felix'),
('K16', 'J6', 'Lola', 'lola.jpg', 3, 'Betina', '2024-01-15', 180.00, 'Tersedia', 'Deskripsi Lola'),
('K17', 'J7', 'Max', 'max.jpg', 2, 'Jantan', '2024-02-01', 160.00, 'Tersedia', 'Deskripsi Max'),
('K18', 'J8', 'Zoe', 'zoe.jpg', 1, 'Betina', '2024-02-15', 200.00, 'Tersedia', 'Deskripsi Zoe'),
('K19', 'J9', 'Rocky', 'rocky.jpg', 3, 'Jantan', '2024-03-01', 190.00, 'Tersedia', 'Deskripsi Rocky'),
('K20', 'J10', 'Coco', 'coco.jpg', 2, 'Betina', '2024-03-15', 170.00, 'Tersedia', 'Deskripsi Coco'),
('K21', 'J1', 'Oliver', 'oliver.jpg', 2, 'Jantan', '2024-04-01', 180.00, 'Tersedia', 'Deskripsi Oliver'),
('K22', 'J2', 'Milo', 'milo.jpg', 1, 'Betina', '2024-04-15', 160.00, 'Tersedia', 'Deskripsi Milo'),
('K23', 'J3', 'Tiger', 'tiger.jpg', 3, 'Jantan', '2024-05-01', 200.00, 'Tersedia', 'Deskripsi Tiger'),
('K24', 'J4', 'Lily', 'lily.jpg', 2, 'Betina', '2024-05-15', 190.00, 'Tersedia', 'Deskripsi Lily'),
('K25', 'J5', 'Charlie', 'charlie.jpg', 1, 'Jantan', '2024-06-01', 170.00, 'Tersedia', 'Deskripsi Charlie'),
('K26', 'J6', 'Bella', 'bella.jpg', 3, 'Betina', '2024-06-15', 180.00, 'Tersedia', 'Deskripsi Bella'),
('K27', 'J7', 'Leo Jr.', 'leo_jr.jpg', 2, 'Jantan', '2024-07-01', 160.00, 'Tersedia', 'Deskripsi Leo Jr.'),
('K28', 'J8', 'Sophie', 'sophie.jpg', 1, 'Betina', '2024-07-15', 200.00, 'Tersedia', 'Deskripsi Sophie'),
('K29', 'J9', 'Misty', 'misty.jpg', 3, 'Jantan', '2024-08-01', 190.00, 'Tersedia', 'Deskripsi Misty'),
('K30', 'J10', 'Chloe', 'chloe.jpg', 2, 'Betina', '2024-08-15', 170.00, 'Tersedia', 'Deskripsi Chloe');

-- Tabel Pembeli
INSERT INTO Pembeli (ID_Pembeli, Nama_Pembeli, Email, No_Telp, Alamat) VALUES
('P1', 'John Doe', 'john.doe@email.com', '123456789', '123 Main St, City A, Province A, 12345'),
('P2', 'Jane Smith', 'jane.smith@email.com', '987654321', '456 Oak St, City B, Province B, 67890'),
('P3', 'Bob Johnson', 'bob.johnson@email.com', '555111222', '789 Maple St, City C, Province C, 10111'),
('P4', 'Alice Williams', 'alice.williams@email.com', '111222333', '321 Pine St, City D, Province D, 22233'),
('P5', 'Charlie Brown', 'charlie.brown@email.com', '444555666', '654 Elm St, City E, Province E, 44455'),
('P6', 'Vunky Himawan', 'pungbei@email.com', '444559266', '78 Elma St, City E, Province E, 44415');

-- Tabel Jenis Pengiriman
INSERT INTO Jenis_Pengiriman (ID_Jenis_Pengiriman, Jenis_Pengiriman) VALUES
('JP1', 'Ambil Toko'),
('JP2', 'Kirim JNT'),
('JP3', 'Kirim JNE'),
('JP4', 'Kirim GrabExpress'),
('JP5', 'Kirim GoSend'),
('JP6', 'COD');

-- Tabel Metode Pembayaran
INSERT INTO Metode_Pembayaran (ID_Metode_Pembayaran, Metode_Pembayaran) VALUES
('MPB1', 'Cash'),
('MPB2', 'Transfer Mandiri'),
('MPB3', 'Transfer BRI'),
('MPB4', 'Transfer BNI'),
('MPB5', 'Transfer BCA'),
('MPB6', 'OVO'),
('MPB7', 'GoPay');

-- Tabel Detail_Transaksi
INSERT INTO Detail_Transaksi (ID_Detail_Transaksi, ID_Transaksi, ID_Kucing) VALUES
('DT1', 'T1', 'K3'),
('DT2', 'T1', 'K2'),
('DT3', 'T2', 'K1'),
('DT4', 'T2', 'K5'),
('DT5', 'T3', 'K8'),
('DT6', 'T3', 'K4'),
('DT7', 'T4', 'K9'),
('DT8', 'T4', 'K25'),
('DT9', 'T5', 'K6'),
('DT10', 'T5', 'K10'),
('DT11', 'T6', 'K21'),
('DT12', 'T6', 'K12'),
('DT13', 'T7', 'K23'),
('DT14', 'T7', 'K30'),
('DT15', 'T8', 'K28'),
('DT16', 'T8', 'K26'),
('DT17', 'T9', 'K29'),
('DT18', 'T9', 'K18'),
('DT19', 'T9', 'K20'),
('DT20', 'T10', 'K19');


-- Tabel Transaksi
INSERT INTO Transaksi (ID_Transaksi, ID_Pembeli, ID_Jenis_Pengiriman, ID_Metode_Pembayaran, Total_Biaya, Nomor_Resi, Tanggal_Transaksi, Pesan) VALUES
('T1', 'P1', 'JP1', 'MPB1', dbo.HitungTotal('T1'), 'RESI123', '2023-01-15', 'Pesan transaksi 1'),
('T2', 'P2', 'JP2', 'MPB2', dbo.HitungTotal('T2'), 'RESI456', '2023-02-20', 'Pesan transaksi 2'),
('T3', 'P1', 'JP1', 'MPB1', dbo.HitungTotal('T3'), 'RESI789', '2023-03-25', 'Pesan transaksi 3'),
('T4', 'P1', 'JP6', 'MPB4', dbo.HitungTotal('T4'), 'RESI101', '2023-04-30', 'Pesan transaksi 4'),
('T5', 'P5', 'JP1', 'MPB5', dbo.HitungTotal('T5'), 'RESI222', '2023-05-05', 'Pesan transaksi 5'),
('T6', 'P1', 'JP3', 'MPB1', dbo.HitungTotal('T6'), 'RESI333', '2023-06-10', 'Pesan transaksi 6'),
('T7', 'P2', 'JP1', 'MPB2', dbo.HitungTotal('T7'), 'RESI444', '2023-07-15', 'Pesan transaksi 7'),
('T8', 'P3', 'JP6', 'MPB3', dbo.HitungTotal('T8'), 'RESI555', '2023-08-20', 'Pesan transaksi 8'),
('T9', 'P4', 'JP1', 'MPB4', dbo.HitungTotal('T9'), 'RESI666', '2023-09-25', 'Pesan transaksi 9'),
('T10', 'P5', 'JP4', 'MPB7', dbo.HitungTotal('T10'), 'RESI777', '2023-10-30', 'Pesan transaksi 10');