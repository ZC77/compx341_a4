from pathlib import Path
import sys
line1 = "// Name: Zachary Cui"
line2 = "// Student ID: 1364880"
passed = 1

for path in Path('src').rglob('*.ts'):
    #print("PATH: " + path.as_posix())
    f = open(path.as_posix(), "r")
    #print(f.readline())
    if (f.readline() == line1):
        if (f.readline() == line2):
            passed = 1
        else:
            passed = 0
    else:
        passed = 1

#print("Python script check result: " + str(passed))
print(str(passed))
sys.exit(passed)