#methode destructor merupakan menyediakan proses khusus sebelum obejek dihancurkan
#methode constructor sebuah method yang akan otomatis dipanggil ketika objek di instantiasi
#methode construktor
class Hero: # template
    def __init__(self, inputname, inputhealth, inputpower, inputarmor):
       self.name = inputname
       self.health = inputhealth
       self.power = inputpower
       self.armor = inputarmor

Hero1 = Hero("sniper",100, 10, 4)
Hero2 = Hero("mirana",100, 15, 1)
Hero3 = Hero(" daniel",1000, 100, 0)

print(Hero1.__dict__)
print(Hero2.__dict__)
print(Hero3.__dict__)