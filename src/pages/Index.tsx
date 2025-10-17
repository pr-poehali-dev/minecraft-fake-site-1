import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const handleLogin = (method: string) => {
    toast({
      title: "Вход выполнен!",
      description: `Добро пожаловать в Minecraft через ${method}`,
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <nav className="border-b border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00ff00] to-[#4ade80] flex items-center justify-center text-black font-bold text-xl">
              M
            </div>
            <span className="text-2xl font-bold text-[#00ff00] minecraft-shadow">MINECRAFT</span>
          </div>
          <div className="flex gap-6">
            <button
              onClick={() => setActiveSection('home')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'home' ? 'text-[#00ff00]' : 'text-gray-400 hover:text-[#4ade80]'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveSection('register')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'register' ? 'text-[#00ff00]' : 'text-gray-400 hover:text-[#4ade80]'
              }`}
            >
              Регистрация
            </button>
            <button
              onClick={() => setActiveSection('interesting')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'interesting' ? 'text-[#00ff00]' : 'text-gray-400 hover:text-[#4ade80]'
              }`}
            >
              Интересное
            </button>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <div className="animate-fade-in">
          <section className="relative py-32 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00ff00]/10 to-transparent"></div>
            <div className="container mx-auto text-center relative z-10">
              <h1 className="text-6xl md:text-8xl font-bold text-[#00ff00] mb-6 minecraft-shadow animate-glow">
                MINECRAFT
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Исследуй бесконечные миры и строй всё, что только можешь вообразить
              </p>
              <Button
                onClick={() => setActiveSection('register')}
                className="bg-[#00ff00] text-black hover:bg-[#4ade80] text-lg px-8 py-6 font-bold"
              >
                НАЧАТЬ ИГРАТЬ
              </Button>
            </div>
          </section>

          <section className="py-20 px-4 bg-[#1a1a1a]">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-center text-[#00ff00] mb-16 minecraft-shadow">
                Возможности игры
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-[#0a0a0a] border-[#2a2a2a] hover:border-[#00ff00] transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#00ff00] flex items-center justify-center mb-4 mx-auto">
                      <Icon name="Pickaxe" className="text-black" size={32} />
                    </div>
                    <CardTitle className="text-[#00ff00] text-center">Режим выживания</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-center">
                      Добывай ресурсы, создавай предметы и выживай в опасном мире
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-[#0a0a0a] border-[#2a2a2a] hover:border-[#00ff00] transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#4ade80] flex items-center justify-center mb-4 mx-auto">
                      <Icon name="Palette" className="text-black" size={32} />
                    </div>
                    <CardTitle className="text-[#4ade80] text-center">Креативный режим</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-center">
                      Безграничные ресурсы для воплощения самых смелых идей
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-[#0a0a0a] border-[#2a2a2a] hover:border-[#00ff00] transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#00ff00] flex items-center justify-center mb-4 mx-auto">
                      <Icon name="Users" className="text-black" size={32} />
                    </div>
                    <CardTitle className="text-[#00ff00] text-center">Мультиплеер</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-center">
                      Играй с друзьями и миллионами игроков по всему миру
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-20 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold text-[#00ff00] mb-8 minecraft-shadow">
                Присоединяйся к миллионам игроков
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Создай свой аккаунт прямо сейчас и начни своё приключение в мире Minecraft
              </p>
              <Button
                onClick={() => setActiveSection('register')}
                size="lg"
                className="bg-[#00ff00] text-black hover:bg-[#4ade80] font-bold"
              >
                ЗАРЕГИСТРИРОВАТЬСЯ
              </Button>
            </div>
          </section>
        </div>
      )}

      {activeSection === 'register' && (
        <div className="min-h-screen flex items-center justify-center px-4 py-20 animate-fade-in">
          <Card className="w-full max-w-md bg-[#1a1a1a] border-[#2a2a2a]">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00ff00] to-[#4ade80] flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-2xl">M</span>
              </div>
              <CardTitle className="text-2xl text-[#00ff00]">Вход в Minecraft</CardTitle>
              <CardDescription className="text-gray-400">
                Выбери способ входа в свой аккаунт
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="email" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-[#0a0a0a]">
                  <TabsTrigger value="email" className="data-[state=active]:bg-[#00ff00] data-[state=active]:text-black">
                    Email
                  </TabsTrigger>
                  <TabsTrigger value="quick" className="data-[state=active]:bg-[#00ff00] data-[state=active]:text-black">
                    Быстрый вход
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="email" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="player@minecraft.com"
                      className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#00ff00]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-300">Пароль</Label>
                    <Input
                      id="password"
                      type="password"
                      className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#00ff00]"
                    />
                  </div>
                  <Button
                    onClick={() => handleLogin('Email')}
                    className="w-full bg-[#00ff00] text-black hover:bg-[#4ade80] font-bold"
                  >
                    ВОЙТИ
                  </Button>
                  <p className="text-center text-sm text-gray-400">
                    Нет аккаунта?{' '}
                    <button className="text-[#00ff00] hover:text-[#4ade80] font-medium">
                      Зарегистрироваться
                    </button>
                  </p>
                </TabsContent>

                <TabsContent value="quick" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-gray-300">Никнейм игрока</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Steve123"
                      className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#00ff00]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="code" className="text-gray-300">Код доступа</Label>
                    <Input
                      id="code"
                      type="text"
                      placeholder="XXXX-XXXX"
                      className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#00ff00]"
                    />
                  </div>
                  <Button
                    onClick={() => handleLogin('Быстрый вход')}
                    className="w-full bg-[#4ade80] text-black hover:bg-[#00ff00] font-bold"
                  >
                    БЫСТРЫЙ ВХОД
                  </Button>
                  <p className="text-center text-sm text-gray-400">
                    Используй код из твоего профиля игры
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      )}

      {activeSection === 'interesting' && (
        <div className="py-20 px-4 animate-fade-in">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center text-[#00ff00] mb-16 minecraft-shadow">
              Интересные факты о Minecraft
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#00ff00] transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Zap" className="text-[#00ff00]" size={24} />
                    <CardTitle className="text-[#00ff00]">Рекорды игры</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <p>🎮 Более 238 миллионов копий продано по всему миру</p>
                  <p>👥 Ежемесячно играют более 140 миллионов человек</p>
                  <p>🌍 Самая продаваемая видеоигра в истории</p>
                  <p>⏱️ В среднем игрок проводит 100+ часов в игре</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#00ff00] transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Trophy" className="text-[#4ade80]" size={24} />
                    <CardTitle className="text-[#4ade80]">Достижения</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <p>🏆 Более 100 различных достижений в игре</p>
                  <p>🎯 Секретные достижения за уникальные действия</p>
                  <p>💎 Редчайшее достижение получают только 1% игроков</p>
                  <p>⭐ Система прогресса мотивирует исследовать мир</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#00ff00] transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Blocks" className="text-[#00ff00]" size={24} />
                    <CardTitle className="text-[#00ff00]">Мир игры</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <p>🌐 Мир в 8 раз больше поверхности Земли</p>
                  <p>📦 Более 800 различных блоков и предметов</p>
                  <p>🏔️ Высота мира от -64 до 320 блоков</p>
                  <p>🎨 Бесконечные возможности для строительства</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#00ff00] transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Sparkles" className="text-[#4ade80]" size={24} />
                    <CardTitle className="text-[#4ade80]">Сообщество</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <p>🎭 Более 100,000 модификаций создано игроками</p>
                  <p>🎬 Миллионы видео на YouTube о Minecraft</p>
                  <p>🏰 Грандиозные постройки известных зданий</p>
                  <p>💻 Образовательная версия для школ</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#00ff00] mb-6">Готов начать своё приключение?</h3>
              <Button
                onClick={() => setActiveSection('register')}
                size="lg"
                className="bg-[#00ff00] text-black hover:bg-[#4ade80] font-bold"
              >
                ПРИСОЕДИНИТЬСЯ СЕЙЧАС
              </Button>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a] py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2024 Minecraft. Все права защищены.</p>
          <p className="mt-2">Исследуй, строй, выживай</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
