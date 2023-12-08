-- Insert data into Jenis table
INSERT INTO Jenis (ID_Jenis, Nama) VALUES
('JEN001', 'Persia'),
('JEN002', 'Maine Coon'),
('JEN003', 'Siamese'),
('JEN004', 'Bengal'),
('JEN005', 'Sphynx');

-- Insert data into Kucing table
INSERT INTO Kucing (ID_Kucing, ID_Jenis, Nama, Foto, Umur, Jenis_Kelamin, Tanggal_Masuk, Biaya, Status, Keterangan) VALUES
('KUC001', 'JEN001', 'Fluffy', 'fluffy.jpg', 4, 'Jantan', '2023-01-01', 500.00, 'Tersedia', 'Cat with fluffy fur'),
('KUC002', 'JEN002', 'Whiskers', 'whiskers.jpg', 6, 'Betina', '2023-02-15', 700.00, 'Tersedia', 'Playful and friendly'),
('KUC003', 'JEN003', 'Mittens', 'mittens.jpg', 9, 'Betina', '2023-03-10', 600.00, 'Tersedia', 'Loves to cuddle'),
('KUC004', 'JEN004', 'Leo', 'leo.jpg', 12, 'Jantan', '2023-04-20', 800.00, 'Tersedia', 'Energetic and playful'),
('KUC005', 'JEN005', 'Naked', 'naked.jpg', 10, 'Jantan', '2023-05-05', 1000.00, 'Tersedia', 'Hairless cat'),
('KUC006', 'JEN001', 'Oreo', 'oreo.jpg', 13, 'Betina', '2023-06-10', 750.00, 'Tersedia', 'Has unique folded ears'),
('KUC007', 'JEN002', 'Milo', 'milo.jpg', 4, 'Jantan', '2023-07-05', 900.00, 'Tersedia', 'Known for their docile nature'),
('KUC008', 'JEN001', 'Luna', 'luna.jpg', 3, 'Betina', '2023-08-20', 850.00, 'Tersedia', 'Distinctive blue-gray coat'),
('KUC009', 'JEN001', 'Simba', 'simba.jpg', 2, 'Jantan', '2023-09-15', 700.00, 'Tersedia', 'Thick, luxurious fur'),
('KUC010', 'JEN005', 'Cleo', 'cleo.jpg', 11, 'Betina', '2023-10-01', 600.00, 'Tersedia', 'Has a short, ticked coat pattern');


-- Insert data into Alamat table
INSERT INTO Alamat (ID_Alamat, Jalan, Kota, Provinsi, Kode_Pos) VALUES
('ALM001', 'Jl. Kucing Bahagia No. 123', 'Jakarta', 'DKI Jakarta', '12345'),
('ALM002', 'Jl. Meong Indah No. 456', 'Bandung', 'Jawa Barat', '67890'),
('ALM003', 'Jl. Kitten Jaya No. 789', 'Surabaya', 'Jawa Timur', '54321'),
('ALM004', 'Jl. Purr Mandiri No. 101', 'Semarang', 'Jawa Tengah', '98765'),
('ALM005', 'Jl. Cat Lovers No. 202', 'Yogyakarta', 'DI Yogyakarta', '13579');

-- Insert data into Pembeli table
INSERT INTO Pembeli (ID_Pembeli, ID_Alamat, Nama, Email, No_Telp) VALUES
('PEM001', 'ALM001', 'John Doe', 'john.doe@email.com', '081234567890'),
('PEM002', 'ALM002', 'Jane Smith', 'jane.smith@email.com', '082345678901'),
('PEM003', 'ALM003', 'Bob Johnson', 'bob.johnson@email.com', '083456789012'),
('PEM004', 'ALM004', 'Alice Brown', 'alice.brown@email.com', '084567890123'),
('PEM005', 'ALM005', 'Charlie Davis', 'charlie.davis@email.com', '085678901234');

-- Insert data into Pengiriman table
INSERT INTO Pengiriman (ID_Pengiriman, ID_Alamat, Jenis_Pengiriman, Nomor_Resi) VALUES
('PNG001', 'ALM001', 'Ambil Toko', 'RESI001'),
('PNG002', 'ALM002', 'Kirim', 'RESI002'),
('PNG003', 'ALM003', 'Ambil Toko', 'RESI003'),
('PNG004', 'ALM004', 'Kirim', 'RESI004'),
('PNG005', 'ALM005', 'Kirim', 'RESI005');

-- Insert data into Pembayaran table
INSERT INTO Pembayaran (ID_Pembayaran, Metode_Pembayaran, Total_Biaya) VALUES
('BYR001', 'Cash', 500.00),
('BYR002', 'Transfer', 700.00),
('BYR003', 'Cash', 600.00),
('BYR004', 'Transfer', 800.00),
('BYR005', 'Transfer', 1000.00);

-- Insert data into Transaksi table
INSERT INTO Transaksi (ID_Transaksi, ID_Pembeli, ID_Pengiriman, ID_Pembayaran, Tanggal_Transaksi, Pesan) VALUES
('TRS001', 'PEM001', 'PNG001', 'BYR001', '2023-01-15', 'Thank you for your purchase!'),
('TRS002', 'PEM002', 'PNG002', 'BYR002', '2023-02-28', 'Your order is on the way!'),
('TRS003', 'PEM003', 'PNG003', 'BYR003', '2023-03-20', 'Enjoy your new furry friend!'),
('TRS004', 'PEM004', 'PNG004', 'BYR004', '2023-04-25', 'Thank you for choosing us!'),
('TRS005', 'PEM005', 'PNG005', 'BYR005', '2023-05-10', 'Your hairless cat is ready for pickup!');

-- Insert data into Detail_Transaksi table
INSERT INTO Detail_Transaksi (ID_Detail_Transaksi, ID_Transaksi, ID_Kucing) VALUES
('DTL001', 'TRS001', 'KUC001'),
('DTL002', 'TRS002', 'KUC002'),
('DTL003', 'TRS003', 'KUC003'),
('DTL004', 'TRS004', 'KUC004'),
('DTL005', 'TRS005', 'KUC005'),
('DTL006', 'TRS001', 'KUC006'),
('DTL007', 'TRS001', 'KUC007'),
('DTL008', 'TRS004', 'KUC008');