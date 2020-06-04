class Mahasiswa:
    def __init__(self):
        self.nama ="gamar"
        self.nilai =(90,70,90,80)
    def hitung_nilai(self):
        return sum(self.nilai)/len(self.nilai)
#cara pemanggilan class
mahasiswa=Mahasiswa()
print("Nama:",mahasiswa.nama)
print("Total Nilai:",mahasiswa.hitung_nilai())