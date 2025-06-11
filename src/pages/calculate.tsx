import { useState } from 'react';
import Hero from '@/components/Hero';

interface Item {
  type: 'Брусчатка' | 'Бордюр' | 'Поребрик';
  area: string;
}

export default function CalculatePage() {
  const [items, setItems] = useState<Item[]>([{ type: 'Брусчатка', area: '' }]);
  const [address, setAddress] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [totalSum, setTotalSum] = useState<number | null>(null);

  const prices = {
    'Брусчатка': 2700,
    'Бордюр': 950,
    'Поребрик': 800,
  };

  const handleChange = (index: number, field: keyof Item, value: string) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const handleAddItem = () => {
    setItems([...items, { type: 'Брусчатка', area: '' }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let sum = 0;
    const details = items.map((item) => {
      const qty = parseFloat(item.area) || 0;
      const pallets = Math.ceil(qty / 10);
      const cost = qty * prices[item.type];
      sum += cost;
      return { ...item, qty, pallets, cost };
    });

    const totalPallets = details.reduce((acc, item) => acc + item.pallets, 0);
    const trips = Math.ceil(totalPallets / 10);

    let delivery = 10000;
    if (address.includes('Аль-Фараби') || address.includes('БАКАД') || address.includes('Ашимова') || address.includes('БАК')) {
      delivery = 10000;
    } else if (address.includes('вверх')) {
      delivery += 10000;
    } else if (address.length > 5) {
      delivery += 20000;
    }

    const palletDeposit = totalPallets * 3000;
    setResults(details);
    setTotalSum(sum + delivery + palletDeposit);
  };

  return (
    <>
      <Hero
        title="Рассчитать стоимость"
        subtitle="Укажите количество продукции и получите предварительный расчёт стоимости"
        backgroundImage="/catalog-hero.jpg"
      />

      <div className="space-y-12 max-w-2xl mx-auto w-full px-4 sm:px-6 py-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white shadow rounded-lg p-4 space-y-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Тип продукции</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={item.type}
                  onChange={(e) => handleChange(idx, 'type', e.target.value)}
                >
                  <option value="Брусчатка">Брусчатка (м²)</option>
                  <option value="Бордюр">Бордюр (п.м.)</option>
                  <option value="Поребрик">Поребрик (п.м.)</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Количество ({item.type === 'Брусчатка' ? 'м²' : 'пог. м'})
                </label>
                <input
                  type="number"
                  min="0"
                  value={item.area}
                  onChange={(e) => handleChange(idx, 'area', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="например, 40"
                  required
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddItem}
            className="text-blue-600 hover:underline text-sm sm:text-base"
            aria-label="Добавить ещё одну продукцию"
          >
            + Добавить ещё позицию
          </button>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Адрес доставки (опционально)</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Укажите адрес"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg w-full sm:w-auto"
          >
            Рассчитать стоимость
          </button>
        </form>

        <hr className="my-6 border-t border-gray-200" />

        {results.length > 0 && (
          <div className="space-y-6">
            {results.map((res, i) => (
              <div key={i} className="border rounded p-3 bg-white shadow-sm">
                <p className="font-medium">{res.type}</p>
                <p>Количество: {res.qty} {res.type === 'Брусчатка' ? 'м²' : 'п.м.'}</p>
                <p>Паллет: {res.pallets}</p>
                <p>Стоимость: {res.cost.toLocaleString()} ₸</p>
              </div>
            ))}
            <div className="bg-gray-50 rounded-lg p-4 text-gray-800 space-y-2">
              <p><strong>Общая стоимость:</strong> {totalSum?.toLocaleString()} ₸</p>
              <p><strong>Включая доставку</strong> и <strong>залог за паллеты</strong> (3000 ₸/шт, возврат в течение 20 дней)</p>
              <p className="text-sm text-gray-500 pt-2">💡 Расчёт является предварительным. Для точной сметы — отправьте заявку менеджеру.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
