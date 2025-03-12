from asyncio import Semaphore
import asyncio

semaphore = Semaphore(5)

async def demo():
    # 其实限制的原理就是内置了一个value,acquire一次就会加一，release一次就会减一
    # 当到达最大信号量的时候会一直阻塞住
    await semaphore.acquire()
    print(1111, semaphore._value)
    semaphore.release()
    await semaphore.acquire()
    print(2222, semaphore._value)
    await semaphore.acquire()
    print(3333, semaphore._value)
    await semaphore.acquire()
    print(4444, semaphore._value)
    await semaphore.acquire()
    print(5555, semaphore._value)
    await semaphore.acquire()
    print(6666, semaphore._value)
    # 执行到这里，会抛出异常：RuntimeError: Task <Task pending 
    await semaphore.acquire()
    print(7777, semaphore._value)

asyncio.run(demo())