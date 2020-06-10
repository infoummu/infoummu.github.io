class mahasisiwa:
    def__init__(self,nama,nilai):
        self.nama=nama
        self.nilai=nilai
        
     def hitung_nilai(self):
            return sum(self.nilai)/len(self.nilai)
mahasiswa = Mahasiswa("EkzaSaptawibowo",(90,70,70,70))
print("Nama: ",mahasiswa.nama)
print("Total Nilai:",mahasiswa.nama())
