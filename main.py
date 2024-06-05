def getout():
    global place1, place2, place4, place5
    place1 = smarttools.string_to_int(sorotime.char_at(0))
    place2 = smarttools.string_to_int(sorotime.char_at(1))
    place4 = smarttools.string_to_int(sorotime.char_at(3))
    place5 = smarttools.string_to_int(sorotime.char_at(4))
place5 = 0
place4 = 0
place2 = 0
sorotime = ""
place1 = 0
minute = 0
hour = 0
runclock = False
while runclock == False:
    if input.button_is_pressed(Button.A):
        hour += 1
        soroban.show_number(hour)
        basic.pause(500)
    if input.button_is_pressed(Button.B):
        minute += 1
        soroban.show_number(minute)
        basic.pause(500)
    if input.logo_is_pressed():
        runclock = True
        basic.pause(500)
    timeanddate.set24_hour_time(hour, minute, 0)

def on_forever():
    global sorotime
    sorotime = timeanddate.time(timeanddate.TimeFormat.HHMM2_4HR)
    getout()
    soroban.show_number(place1, Align.C1, True)
    soroban.show_number(place2, Align.C2, False)
    led.plot(2, 2)
    soroban.show_number(place4, Align.C4, False)
    soroban.show_number(place5, Align.C5, False)
    basic.pause(1000)
    led.unplot(2, 2)
    basic.pause(1000)
basic.forever(on_forever)
