class Mahasiswa:

    def __init__(self,nama,nilai):
          self.nama =nama
          self.nilai =nilai


    def hitung_nilai(self):
        return sum(self.nilai)/len(self.nilai)

#cara memanggil class
mahasiswa= Mahasiswa("gamar",(90,90,70,80))
print("Nama", mahasiswa.nama)
print("total nilai: ", mahasiswa.hitung_nilai())
