class Mahasiswa:
    def __init__(self):
          self.nama="dio"
          self.nilai=(90,70,90,80)
    def hitung_nilai(self):
            return sum(self.nilai)/len(self.nilai)
#cara memanggil class
mahasiswa= Mahasiswa()
print("nama",mahasiswa.nama)
print("total nilai:",mahasiswa.hitung_nilai())
