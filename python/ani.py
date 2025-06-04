import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

# Создаем фигуру и оси
fig, ax = plt.subplots(figsize=(5, 5))
ax.set_xlim(0, 10)
ax.set_ylim(0, 10)
ax.set_xticks([])
ax.set_yticks([])
ax.set_frame_on(False)

# Данные для зданий (координаты линий)
buildings = [
    [(1, 3), (1, 7), (2, 7), (2, 3)],  # Маленькое здание
    [(3, 3), (3, 8), (4, 8), (4, 3)],  # Среднее здание
    [(5, 3), (5, 9), (6, 9), (6, 3)],  # Высокое здание
    [(7, 3), (7, 6), (8, 6), (8, 3)],  # Маленькое здание справа
]

# Окна (координаты точек)
windows = [
    (1.2, 5.5), (1.2, 6.5), (1.7, 5.5), (1.7, 6.5),  # Окна на 1-м доме
    (3.2, 6.5), (3.2, 7.5), (3.7, 6.5), (3.7, 7.5),  # Окна на 2-м доме
    (5.2, 7.5), (5.2, 8.5), (5.7, 7.5), (5.7, 8.5),  # Окна на 3-м доме
    (7.2, 4.5), (7.2, 5.5), (7.7, 4.5), (7.7, 5.5),  # Окна на 4-м доме
]

# Черта под зданиями
ground = [(0.5, 3), (8.5, 3)]

# Создаем пустые линии для анимации
lines = [ax.plot([], [], 'k', lw=2)[0] for _ in buildings]
ground_line, = ax.plot([], [], 'k', lw=2)  # Черта (земля)
window_dots, = ax.plot([], [], 'ks', markersize=4)  # Окна

# Текст "IMAMOV"
text = ax.text(9, 6, "IMAMOV", fontsize=14, fontweight="bold", ha="left", va="center", alpha=0)


# Функция анимации
def animate(i):
    if i < len(buildings):
        x, y = zip(*buildings[i])  # Достаем координаты здания
        lines[i].set_data(x, y)
    elif i < len(buildings) + 1:
        x, y = zip(*ground)
        ground_line.set_data(x, y)
    elif i < len(buildings) + 2:
        x, y = zip(*windows)
        window_dots.set_data(x, y)
    else:
        text.set_alpha((i - len(buildings) - 2) / 10)  # Плавное появление текста

    return lines + [ground_line, window_dots, text]


# Создаем анимацию
ani = animation.FuncAnimation(fig, animate, frames=20, interval=300, repeat=False)

# Показываем анимацию
plt.show()
