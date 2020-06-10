def_init_(self):
     self.nama="Rosnia"
     self.nilai=(90,70,90,80)
  def hitung_nilai(self):
      return sum(self.nilai)/len(self.nilai)
mahasiswa=Mahasiswa()
print("Nama: ", mahasiswa.nama)
print("Total Nilai:",mahasisiwa.hitung_nilai()
