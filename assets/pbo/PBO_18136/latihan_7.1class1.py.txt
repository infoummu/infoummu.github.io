class Mahasiswa:
    definit_(self):
        self.nama="gamar"
        self.nilai=(90,70,90,80)
    def hitung_nilai(self):
        return sum(self.nilai)/len(self.nilai)
        
    #cara pemanggilan class
    Mahasiswa=Mahasiswa()
    print("nama:", Mahasiswa.nama)
    print("total nilai:", Mahasiswa.hitung_nilai())
