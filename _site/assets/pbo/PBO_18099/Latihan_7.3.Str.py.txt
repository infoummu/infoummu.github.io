class Mahasiswa :
    def __init__(self, nama, kelas):
        self.nama = nama
        self.kelas = kelas

    def __str__(self):
        return f"nama {self.nama}, kelas : {self.kelas}"
        
c=Mahasiswa("vivi", 45)
print(c)