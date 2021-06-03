from pathlib import Path
import sys
expectedLine1 = "// Name: Zachary Cui"
expectedLine2 = "// Student ID: 1364880"
passed = 1

for path in Path('src').rglob('*.ts'):
    #print("PATH: " + path.as_posix())
    f = open(path.as_posix(), "r")
    rl1 = f.readline()
    rl1 = rl1.rstrip('\n')
    rl2 = f.readline()
    rl2 = rl2.rstrip('\n')
    if rl1 == expectedLine1 and rl2 == expectedLine2:
        passed = 0
    else:
        passed = 1

#print("Python script check result: " + str(passed))
print(str(passed))
sys.exit(passed)