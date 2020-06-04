class Mahasiswa:
    def __init__(self, nama, nilai):
        self.nama = nama
        self.nilai = nilai
    def hitung_nilai(self):
        return sum(self.nilai)/len(self.nilai)
mahasiswa = Mahasiswa("Fazlur", (90,70,70,70))
print("Nama :", mahasiswa.nama)
print("Total Nilai :", mahasiswa.hitung_nilai())