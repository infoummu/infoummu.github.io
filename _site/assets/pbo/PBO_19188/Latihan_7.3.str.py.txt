class Mahasiswa:
    def __init__(self, nama, kelas):
        self.nama = nama
        self.kelas = kelas
    def __str__(self):
        return f"nama {self.nama}, kelas: {self.kelas}"
    def __repr__(self):
        return f"<nama ('{self.nama}', kelas: {self.kelas})>"
c = Mahasiswa("yuyun",45)
print(c)