'use client'

import { useState } from 'react'
import { CheckCircle2, Circle, TrendingUp, Target, Clock, AlertCircle, Youtube, Music, Users, DollarSign, Calendar, ListChecks, ChevronDown, ChevronUp } from 'lucide-react'

interface ChecklistItem {
  id: string
  title: string
  description: string
  priority: 'critical' | 'high' | 'medium'
  timeframe: string
  completed: boolean
  category: string
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'diagnostico' | 'plano' | 'checklist' | 'monetizacao'>('diagnostico')
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([
    // Semana 1-2: Fundação
    {
      id: '1',
      title: 'Otimizar identidade visual do canal',
      description: 'Criar logo profissional, banner com design atraente (2560x1440px) destacando "Worship Instrumental" e thumbnail padrão em alta qualidade',
      priority: 'critical',
      timeframe: 'Semana 1-2',
      completed: false,
      category: 'Fundação'
    },
    {
      id: '2',
      title: 'Reescrever descrição do canal',
      description: 'Incluir palavras-chave: "música gospel instrumental", "worship piano", "louvor instrumental", "música cristã para oração". Adicionar horários de postagem e call-to-action',
      priority: 'critical',
      timeframe: 'Semana 1-2',
      completed: false,
      category: 'Fundação'
    },
    {
      id: '3',
      title: 'Otimizar vídeo existente',
      description: 'Título: "Adoração Instrumental Profunda | Música Worship Piano para Oração e Meditação". Tags: worship instrumental, louvor piano, música gospel, christian music, peaceful worship. Thumbnail atraente com texto legível',
      priority: 'critical',
      timeframe: 'Semana 1-2',
      completed: false,
      category: 'Fundação'
    },
    {
      id: '4',
      title: 'Configurar seções no canal',
      description: 'Criar playlists: "Piano Worship", "Guitar Worship", "Música para Oração", "Deep Worship". Organizar conteúdo por tema',
      priority: 'high',
      timeframe: 'Semana 1-2',
      completed: false,
      category: 'Fundação'
    },
    // Semana 2-4: Produção de Conteúdo
    {
      id: '5',
      title: 'Produzir 10 vídeos iniciais',
      description: 'Criar biblioteca com diferentes estilos: piano solo, violão, cordas, ambient. Duração: 8-15 minutos cada. Usar Suno AI com prompts otimizados',
      priority: 'critical',
      timeframe: 'Semana 2-4',
      completed: false,
      category: 'Produção'
    },
    {
      id: '6',
      title: 'Criar templates de thumbnail',
      description: 'Design consistente com paleta de cores worship (azul profundo, dourado, branco). Incluir texto grande e legível, imagens de instrumentos/natureza',
      priority: 'high',
      timeframe: 'Semana 2-4',
      completed: false,
      category: 'Produção'
    },
    {
      id: '7',
      title: 'Desenvolver roteiro de títulos',
      description: 'Fórmulas: "[Instrumento] Worship para [Propósito]", "Música Gospel Instrumental | [Mood/Tema]", "[Tempo] de Adoração Instrumental [Estilo]"',
      priority: 'high',
      timeframe: 'Semana 2-4',
      completed: false,
      category: 'Produção'
    },
    {
      id: '8',
      title: 'Estabelecer calendário de postagem',
      description: 'Publicar 3-4x por semana (Seg, Qua, Sex, Dom). Horários: 6h, 12h ou 19h (quando audiência gospel está ativa). Usar YouTube Studio para agendamento',
      priority: 'critical',
      timeframe: 'Semana 2-4',
      completed: false,
      category: 'Produção'
    },
    // Mês 1-2: SEO e Descoberta
    {
      id: '9',
      title: 'Pesquisa de palavras-chave',
      description: 'Usar TubeBuddy/VidIQ gratuito. Focar em: "worship instrumental", "música para orar", "piano gospel", "louvor suave", "soaking music português"',
      priority: 'critical',
      timeframe: 'Mês 1-2',
      completed: false,
      category: 'SEO'
    },
    {
      id: '10',
      title: 'Otimizar descrições de vídeos',
      description: 'Template: Introdução (2-3 linhas) + Timestamps + Palavras-chave naturais + Links de playlists + Call-to-action (inscrever e ativar sino)',
      priority: 'high',
      timeframe: 'Mês 1-2',
      completed: false,
      category: 'SEO'
    },
    {
      id: '11',
      title: 'Implementar estratégia de tags',
      description: '15-20 tags por vídeo: 5 específicas + 5 médias + 5 amplas. Ex: "adoração piano intimista" > "worship piano" > "música gospel"',
      priority: 'high',
      timeframe: 'Mês 1-2',
      completed: false,
      category: 'SEO'
    },
    {
      id: '12',
      title: 'Criar cards e telas finais',
      description: 'Cards: promover playlists aos 30-50% do vídeo. Tela final: vídeo relacionado + playlist + inscrição. Tempo: últimos 20 segundos',
      priority: 'medium',
      timeframe: 'Mês 1-2',
      completed: false,
      category: 'SEO'
    },
    // Mês 1-3: Promoção
    {
      id: '13',
      title: 'Criar perfis em redes sociais',
      description: 'Instagram, Facebook, TikTok com mesmo nome @agnussound. Postar trechos de 15-60s. Bio com link do canal',
      priority: 'high',
      timeframe: 'Mês 1-3',
      completed: false,
      category: 'Promoção'
    },
    {
      id: '14',
      title: 'Engajar em comunidades gospel',
      description: 'Grupos Facebook de adoração, fóruns gospel, comentar em canais similares (sem spam). Agregar valor genuíno',
      priority: 'medium',
      timeframe: 'Mês 1-3',
      completed: false,
      category: 'Promoção'
    },
    {
      id: '15',
      title: 'Parcerias com canais pequenos',
      description: 'Buscar canais com 1k-10k inscritos no mesmo nicho. Propor playlists colaborativas ou menções mútuas',
      priority: 'medium',
      timeframe: 'Mês 1-3',
      completed: false,
      category: 'Promoção'
    },
    {
      id: '16',
      title: 'Criar conteúdo para Pinterest',
      description: 'Pins com designs de thumbnails linkando para vídeos. Boards temáticos: "Música para Oração", "Worship Instrumental"',
      priority: 'medium',
      timeframe: 'Mês 1-3',
      completed: false,
      category: 'Promoção'
    },
    // Mês 2-4: Engajamento
    {
      id: '17',
      title: 'Responder TODOS os comentários',
      description: 'Primeiras 24h são críticas. Fazer perguntas para estimular respostas. Criar comunidade',
      priority: 'high',
      timeframe: 'Mês 2-4',
      completed: false,
      category: 'Engajamento'
    },
    {
      id: '18',
      title: 'Criar enquetes na aba Comunidade',
      description: 'Postar 2x/semana: "Que instrumento preferem?", "Melhor horário para adoração?", "Tema do próximo vídeo?"',
      priority: 'medium',
      timeframe: 'Mês 2-4',
      completed: false,
      category: 'Engajamento'
    },
    {
      id: '19',
      title: 'Analisar Analytics semanalmente',
      description: 'CTR de thumbnail (meta: >4%), Retenção média (meta: >50%), Origens de tráfego. Ajustar estratégia baseado em dados',
      priority: 'high',
      timeframe: 'Mês 2-4',
      completed: false,
      category: 'Engajamento'
    },
    {
      id: '20',
      title: 'Testar diferentes formatos',
      description: 'Vídeos 3-5min vs 10-30min, Lives de adoração, Compilações temáticas. Identificar o que performa melhor',
      priority: 'medium',
      timeframe: 'Mês 2-4',
      completed: false,
      category: 'Engajamento'
    },
    // Mês 4-8: Crescimento Acelerado
    {
      id: '21',
      title: 'Desenvolver série temática',
      description: '"30 Dias de Adoração", "Worship para Cada Estação", "Instrumentos da Bíblia". Criar expectativa e fidelização',
      priority: 'high',
      timeframe: 'Mês 4-8',
      completed: false,
      category: 'Crescimento'
    },
    {
      id: '22',
      title: 'Implementar live streaming',
      description: '1-2x/mês: "Adoração ao Vivo - 2 Horas de Worship Instrumental". Promover com antecedência. Salvar como vídeo depois',
      priority: 'high',
      timeframe: 'Mês 4-8',
      completed: false,
      category: 'Crescimento'
    },
    {
      id: '23',
      title: 'Criar vídeos "virais"',
      description: 'Formatos que performam: "3h de Piano Worship", "Música para Dormir em Paz com Deus", "Adoração Profunda sem Palavras"',
      priority: 'high',
      timeframe: 'Mês 4-8',
      completed: false,
      category: 'Crescimento'
    },
    {
      id: '24',
      title: 'Expandir para Shorts',
      description: 'Criar 3-5 Shorts/semana de 15-60s. Trechos mais impactantes dos vídeos longos. Linking para canal',
      priority: 'high',
      timeframe: 'Mês 4-8',
      completed: false,
      category: 'Crescimento'
    },
    // Mês 6-12: Monetização
    {
      id: '25',
      title: 'Alcançar 1.000 inscritos',
      description: 'Meta: 30-50 inscritos/semana. Implementar todas estratégias anteriores consistentemente',
      priority: 'critical',
      timeframe: 'Mês 6-12',
      completed: false,
      category: 'Monetização'
    },
    {
      id: '26',
      title: 'Alcançar 4.000h de exibição',
      description: 'Focar em vídeos longos (>10min) com alta retenção. Playlists automáticas. Lives contam',
      priority: 'critical',
      timeframe: 'Mês 6-12',
      completed: false,
      category: 'Monetização'
    },
    {
      id: '27',
      title: 'Aplicar para Programa de Parcerias',
      description: 'Quando atingir requisitos. Revisar políticas de conteúdo. Garantir 100% de direitos autorais (Suno AI comercial)',
      priority: 'critical',
      timeframe: 'Mês 6-12',
      completed: false,
      category: 'Monetização'
    },
    {
      id: '28',
      title: 'Configurar monetização alternativa',
      description: 'Enquanto aguarda YPP: Ko-fi, PayPal donations, link na descrição. "Apoie este ministério"',
      priority: 'medium',
      timeframe: 'Mês 6-12',
      completed: false,
      category: 'Monetização'
    }
  ])

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const toggleChecklistItem = (id: string) => {
    setChecklistItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const categories = Array.from(new Set(checklistItems.map(item => item.category)))
  const completedCount = checklistItems.filter(item => item.completed).length
  const progressPercentage = (completedCount / checklistItems.length) * 100

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'critical': return 'bg-red-500/20 text-red-300 border-red-500/50'
      case 'high': return 'bg-orange-500/20 text-orange-300 border-orange-500/50'
      case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50'
      default: return 'bg-blue-500/20 text-blue-300 border-blue-500/50'
    }
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Youtube className="w-12 h-12 text-red-500" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Agnus Sound
            </h1>
          </div>
          <p className="text-xl text-slate-300">Plano Completo de Crescimento e Monetização</p>
          <a
            href="https://youtube.com/@agnussound"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-purple-400 hover:text-purple-300 transition-colors"
          >
            @agnussound
          </a>
        </div>

        {/* Progress Bar */}
        <div className="card mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-semibold">Progresso Geral</span>
            <span className="text-2xl font-bold text-purple-400">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <p className="text-sm text-slate-400 mt-2">{completedCount} de {checklistItems.length} tarefas concluídas</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTab('diagnostico')}
            className={`btn ${activeTab === 'diagnostico' ? 'btn-primary' : 'bg-slate-700 hover:bg-slate-600'}`}
          >
            <AlertCircle className="inline w-5 h-5 mr-2" />
            Diagnóstico
          </button>
          <button
            onClick={() => setActiveTab('plano')}
            className={`btn ${activeTab === 'plano' ? 'btn-primary' : 'bg-slate-700 hover:bg-slate-600'}`}
          >
            <Target className="inline w-5 h-5 mr-2" />
            Estratégias
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`btn ${activeTab === 'checklist' ? 'btn-primary' : 'bg-slate-700 hover:bg-slate-600'}`}
          >
            <ListChecks className="inline w-5 h-5 mr-2" />
            Checklist
          </button>
          <button
            onClick={() => setActiveTab('monetizacao')}
            className={`btn ${activeTab === 'monetizacao' ? 'btn-primary' : 'bg-slate-700 hover:bg-slate-600'}`}
          >
            <DollarSign className="inline w-5 h-5 mr-2" />
            Monetização
          </button>
        </div>

        {/* Content */}
        {activeTab === 'diagnostico' && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="section-title">🔍 Diagnóstico do Canal Atual</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6" />
                    Problemas Críticos Identificados
                  </h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">•</span>
                      <div>
                        <strong>Falta de identidade visual:</strong> Sem logo, banner genérico, sem thumbnail personalizada. Isso reduz confiança e cliques.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">•</span>
                      <div>
                        <strong>SEO inexistente:</strong> Título genérico "Música Adoração 03", descrição vazia, sem tags otimizadas. YouTube não consegue recomendar seu vídeo.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">•</span>
                      <div>
                        <strong>Conteúdo insuficiente:</strong> 1 único vídeo não gera algoritmo. Precisa de biblioteca mínima de 10-15 vídeos.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">•</span>
                      <div>
                        <strong>Canal sem descrição:</strong> Visitantes não sabem o que esperar. Falta call-to-action e frequência de postagem.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">•</span>
                      <div>
                        <strong>Ausência de promoção:</strong> Nenhuma divulgação externa. YouTube não promove canais novos automaticamente.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">•</span>
                      <div>
                        <strong>Vídeo muito longo sem estrutura:</strong> 1h16min sem timestamps, dificulta retenção para novos espectadores.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6" />
                    Pontos Positivos
                  </h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">•</span>
                      <div>
                        <strong>Nicho excelente:</strong> Música worship instrumental tem demanda consistente e engajamento alto. Público fiel busca conteúdo para oração, estudo, trabalho.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">•</span>
                      <div>
                        <strong>Produção viável:</strong> Suno AI permite criar conteúdo de qualidade em escala, sem precisar de estúdio profissional.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">•</span>
                      <div>
                        <strong>Início correto:</strong> Canal criado, primeiro vídeo publicado. Base para construir.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">•</span>
                      <div>
                        <strong>Qualidade do áudio:</strong> Música tem boa qualidade para AI-generated, adequada ao propósito.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="section-title">📊 Realidade do Nicho</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-700/30 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">Concorrência</h3>
                  <p className="text-slate-300 mb-3">Canais de sucesso no nicho worship instrumental:</p>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• Soaking Worship: 500K+ inscritos</li>
                    <li>• Prayer Music: 200K+ inscritos</li>
                    <li>• Peaceful Worship: 150K+ inscritos</li>
                    <li><strong className="text-purple-300">Comum entre eles:</strong> postagem consistente (3-7x/semana), thumbnails profissionais, títulos otimizados, biblioteca extensa</li>
                  </ul>
                </div>
                <div className="bg-slate-700/30 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">Oportunidades</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Conteúdo em português tem menos competição</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Vídeos longos (1h+) performam bem para estudo/trabalho</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Playlists temáticas geram visualizações passivas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Lives de adoração criam comunidade engajada</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'plano' && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="section-title">🎯 Estratégias Fundamentais</h2>

              <div className="space-y-8">
                {/* Estratégia 1 */}
                <div className="bg-slate-700/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <Music className="w-6 h-6" />
                    1. Otimização de SEO para YouTube
                  </h3>
                  <div className="space-y-4 text-slate-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Títulos que convertem:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>✓ <strong>Fórmula:</strong> [Duração] + [Instrumento] + [Propósito] + [Emoção]</li>
                        <li className="text-purple-300">Exemplo: "2 Horas de Piano Worship para Oração Profunda | Música Relaxante para Meditar"</li>
                        <li>✓ Incluir números (3 Horas, 10 Músicas)</li>
                        <li>✓ Palavras-chave no início do título</li>
                        <li>✓ Máximo 60 caracteres visíveis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Descrições estruturadas:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>✓ Primeiras 2-3 linhas: resumo com palavras-chave</li>
                        <li>✓ Timestamps detalhados (ajuda retenção)</li>
                        <li>✓ Call-to-action: "Inscreva-se e ative 🔔"</li>
                        <li>✓ Links para playlists relacionadas</li>
                        <li>✓ Hashtags: #worshipmusic #musicagospel #adoracao</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Tags estratégicas (15-20 por vídeo):</h4>
                      <div className="bg-slate-800/50 p-3 rounded text-sm">
                        <p className="mb-2"><strong>Específicas:</strong> adoração piano intimista, música worship violão, louvor instrumental suave</p>
                        <p className="mb-2"><strong>Médias:</strong> worship instrumental, música gospel piano, louvor sem palavras</p>
                        <p><strong>Amplas:</strong> música cristã, gospel music, christian instrumental</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Estratégia 2 */}
                <div className="bg-slate-700/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6" />
                    2. Estratégia de Conteúdo
                  </h3>
                  <div className="space-y-4 text-slate-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Tipos de vídeo para criar:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-slate-800/50 p-4 rounded">
                          <p className="font-semibold text-purple-300 mb-2">Vídeos Longos (30min-3h)</p>
                          <p className="text-sm">Para estudo, trabalho, sono. Alta retenção de watch time.</p>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded">
                          <p className="font-semibold text-purple-300 mb-2">Vídeos Médios (8-15min)</p>
                          <p className="text-sm">Momento devocional, oração rápida. Fácil compartilhamento.</p>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded">
                          <p className="font-semibold text-purple-300 mb-2">Compilações Temáticas</p>
                          <p className="text-sm">"Melhores de 2024", "Worship para Natal", etc.</p>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded">
                          <p className="font-semibold text-purple-300 mb-2">Lives de Adoração</p>
                          <p className="text-sm">Criar comunidade, interação ao vivo.</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Calendário de postagem ideal:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>📅 <strong>Segunda 6h:</strong> "Começando a Semana em Adoração"</li>
                        <li>📅 <strong>Quarta 12h:</strong> "Pausa para Renovação"</li>
                        <li>📅 <strong>Sexta 19h:</strong> "Preparando o Coração para o Final de Semana"</li>
                        <li>📅 <strong>Domingo 6h:</strong> "Adoração Matinal"</li>
                        <li className="text-yellow-300">⚠️ Consistência é mais importante que frequência!</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Estratégia 3 */}
                <div className="bg-slate-700/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    3. Crescimento e Engajamento
                  </h3>
                  <div className="space-y-4 text-slate-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Táticas de crescimento orgânico:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>🔍 <strong>Pesquisa de tendências:</strong> Google Trends + YouTube Search para "música gospel", "adoração" (picos em datas religiosas)</li>
                        <li>🎨 <strong>Thumbnails irresistíveis:</strong> Design clean, texto grande, cores quentes (dourado, azul profundo), imagens de paz/natureza</li>
                        <li>💬 <strong>Engajamento ativo:</strong> Responder 100% dos comentários nas primeiras 24h. Fazer perguntas para estimular conversa</li>
                        <li>🔗 <strong>Playlists inteligentes:</strong> Criar sequências que mantêm espectador no canal. Ex: "Adoração Matinal" (5 vídeos)</li>
                        <li>📱 <strong>YouTube Shorts:</strong> Criar trechos de 15-60s dos vídeos longos. Porta de entrada para novo público</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Promoção externa:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>📘 <strong>Facebook:</strong> Grupos de adoração, igrejas locais. Compartilhar genuinamente, não spam</li>
                        <li>📸 <strong>Instagram:</strong> Reels com trechos + stories diários. Bio linkando canal</li>
                        <li>🎵 <strong>TikTok:</strong> Versões curtas com texto overlay ("POV: orando em paz"). Viraliza fácil</li>
                        <li>📌 <strong>Pinterest:</strong> Criar pins com designs bonitos linkando vídeos. Tráfego passivo</li>
                        <li>💬 <strong>Telegram/WhatsApp:</strong> Grupo de oração + compartilhar novos vídeos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Estratégia 4 */}
                <div className="bg-slate-700/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" />
                    4. Analytics e Otimização
                  </h3>
                  <div className="space-y-4 text-slate-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Métricas críticas para monitorar:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-slate-800/50 p-4 rounded">
                          <p className="font-semibold text-green-400 mb-1">CTR (Click-Through Rate)</p>
                          <p className="text-sm mb-1"><strong>Meta:</strong> &gt;4%</p>
                          <p className="text-xs text-slate-400">Mede qualidade de thumbnail + título. Se baixo, redesenhar.</p>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded">
                          <p className="font-semibold text-green-400 mb-1">Retenção Média</p>
                          <p className="text-sm mb-1"><strong>Meta:</strong> &gt;50%</p>
                          <p className="text-xs text-slate-400">Quanto do vídeo assistem. Crucial para algoritmo recomendar.</p>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded">
                          <p className="font-semibold text-green-400 mb-1">Origens de Tráfego</p>
                          <p className="text-sm mb-1"><strong>Ideal:</strong> 40%+ sugeridos</p>
                          <p className="text-xs text-slate-400">YouTube recomendando. Se baixo, melhorar SEO.</p>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded">
                          <p className="font-semibold text-green-400 mb-1">Watch Time</p>
                          <p className="text-sm mb-1"><strong>Meta:</strong> 4.000h em 12 meses</p>
                          <p className="text-xs text-slate-400">Requisito para monetização. Vídeos longos ajudam.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-300 mb-2">⚡ Dica de Ouro:</p>
                      <p className="text-sm">Analise semanalmente qual thumbnail/título teve melhor CTR. Replique padrão vencedor nos próximos vídeos. Teste A/B mudando thumbnail após 48h se performance baixa.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'checklist' && (
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="section-title mb-0">✅ Checklist Executável</h2>
                <div className="text-right">
                  <p className="text-sm text-slate-400">Meta: Monetização em 6-12 meses</p>
                </div>
              </div>

              <div className="space-y-6">
                {categories.map(category => {
                  const categoryItems = checklistItems.filter(item => item.category === category)
                  const categoryCompleted = categoryItems.filter(item => item.completed).length
                  const categoryProgress = (categoryCompleted / categoryItems.length) * 100
                  const isExpanded = expandedSections[category]

                  return (
                    <div key={category} className="bg-slate-700/30 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection(category)}
                        className="w-full p-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">
                            {category === 'Fundação' && '🏗️'}
                            {category === 'Produção' && '🎬'}
                            {category === 'SEO' && '🔍'}
                            {category === 'Promoção' && '📢'}
                            {category === 'Engajamento' && '💬'}
                            {category === 'Crescimento' && '📈'}
                            {category === 'Monetização' && '💰'}
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg font-bold text-white">{category}</h3>
                            <p className="text-sm text-slate-400">{categoryCompleted}/{categoryItems.length} concluídas</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-32 progress-bar">
                            <div className="progress-fill" style={{ width: `${categoryProgress}%` }}></div>
                          </div>
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-4 space-y-3 border-t border-slate-600">
                          {categoryItems.map(item => (
                            <div key={item.id} className="checklist-item" onClick={() => toggleChecklistItem(item.id)}>
                              <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => toggleChecklistItem(item.id)}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <div className="flex items-start justify-between gap-3 mb-2">
                                  <h4 className={`font-semibold ${item.completed ? 'line-through text-slate-500' : 'text-white'}`}>
                                    {item.title}
                                  </h4>
                                  <div className="flex items-center gap-2 flex-shrink-0">
                                    <span className={`badge border ${getPriorityColor(item.priority)}`}>
                                      {item.priority === 'critical' && '🔴 Crítico'}
                                      {item.priority === 'high' && '🟠 Alto'}
                                      {item.priority === 'medium' && '🟡 Médio'}
                                    </span>
                                    <span className="badge bg-slate-700 text-slate-300 border border-slate-600">
                                      <Clock className="w-3 h-3 mr-1" />
                                      {item.timeframe}
                                    </span>
                                  </div>
                                </div>
                                <p className={`text-sm ${item.completed ? 'line-through text-slate-600' : 'text-slate-300'}`}>
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="card bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/50">
              <h3 className="text-xl font-bold text-white mb-4">💡 Dicas para Executar o Checklist</h3>
              <ul className="space-y-3 text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <strong>Reserve tempo fixo:</strong> 2-3h/dia dedicadas ao canal. Consistência &gt; Intensidade.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <strong>Priorize itens críticos:</strong> Foque em tarefas vermelhas primeiro. Elas desbloqueiam crescimento.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <strong>Acompanhe semanalmente:</strong> Revise checklist + analytics todo domingo. Ajuste estratégia conforme dados.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <strong>Peça feedback:</strong> Mostre vídeos para amigos/igreja. Pergunte: "Você clicaria nesse thumbnail?"
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💪</span>
                  <div>
                    <strong>Não desista nos primeiros 3 meses:</strong> Crescimento é exponencial. Parece lento no início, mas acelera.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'monetizacao' && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="section-title">💰 Caminho para Monetização</h2>

              <div className="space-y-8">
                {/* Requisitos */}
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-400 mb-4">Requisitos do YouTube Partner Program (YPP)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="w-8 h-8 text-green-400" />
                        <div>
                          <p className="text-2xl font-bold text-white">1.000</p>
                          <p className="text-sm text-slate-300">Inscritos</p>
                        </div>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded">
                        <p className="text-sm text-slate-300 mb-2"><strong>Como alcançar:</strong></p>
                        <ul className="text-xs text-slate-400 space-y-1">
                          <li>• Meta: 30-50 inscritos/semana</li>
                          <li>• CTAs em todos os vídeos (verbal + visual)</li>
                          <li>• Shorts direcionam para canal principal</li>
                          <li>• Lives convertem bem (20-30% inscrevem)</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="w-8 h-8 text-green-400" />
                        <div>
                          <p className="text-2xl font-bold text-white">4.000h</p>
                          <p className="text-sm text-slate-300">Horas assistidas (últimos 12 meses)</p>
                        </div>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded">
                        <p className="text-sm text-slate-300 mb-2"><strong>Como alcançar:</strong></p>
                        <ul className="text-xs text-slate-400 space-y-1">
                          <li>• Vídeos longos (1h+ = 1h watch time/view)</li>
                          <li>• Manter retenção &gt;50%</li>
                          <li>• Playlists aumentam tempo de sessão</li>
                          <li>• Lives contam para watch time</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Realista */}
                <div className="bg-slate-700/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <Calendar className="w-6 h-6" />
                    Timeline Realista de Crescimento
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-24 text-center">
                        <div className="bg-purple-600 text-white font-bold py-2 px-3 rounded-lg">Mês 1-2</div>
                      </div>
                      <div className="flex-1 bg-slate-800/50 p-4 rounded-lg">
                        <p className="font-semibold text-white mb-2">Fundação e Setup</p>
                        <p className="text-sm text-slate-300 mb-2">50-100 inscritos | 200-500 horas</p>
                        <p className="text-xs text-slate-400">Foco: criar biblioteca inicial, otimizar canal, estabelecer consistência</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-24 text-center">
                        <div className="bg-purple-600 text-white font-bold py-2 px-3 rounded-lg">Mês 3-4</div>
                      </div>
                      <div className="flex-1 bg-slate-800/50 p-4 rounded-lg">
                        <p className="font-semibold text-white mb-2">Crescimento Inicial</p>
                        <p className="text-sm text-slate-300 mb-2">200-400 inscritos | 800-1.500 horas</p>
                        <p className="text-xs text-slate-400">Foco: SEO funcionando, primeiros vídeos recomendados, engajamento crescente</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-24 text-center">
                        <div className="bg-purple-600 text-white font-bold py-2 px-3 rounded-lg">Mês 5-8</div>
                      </div>
                      <div className="flex-1 bg-slate-800/50 p-4 rounded-lg">
                        <p className="font-semibold text-white mb-2">Aceleração</p>
                        <p className="text-sm text-slate-300 mb-2">500-800 inscritos | 2.000-3.500 horas</p>
                        <p className="text-xs text-slate-400">Foco: algoritmo favorecendo, vídeos virais, comunidade ativa</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-24 text-center">
                        <div className="bg-green-600 text-white font-bold py-2 px-3 rounded-lg">Mês 9-12</div>
                      </div>
                      <div className="flex-1 bg-slate-800/50 p-4 rounded-lg border-2 border-green-500/50">
                        <p className="font-semibold text-green-400 mb-2">Meta Atingida! 🎉</p>
                        <p className="text-sm text-slate-300 mb-2">1.000+ inscritos | 4.000+ horas</p>
                        <p className="text-xs text-slate-400">Foco: aplicar para YPP, configurar AdSense, primeiras receitas</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cálculo de Receita */}
                <div className="bg-slate-700/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <DollarSign className="w-6 h-6" />
                    Projeção de Receita (após monetização)
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-slate-800/50 p-4 rounded-lg text-center">
                      <p className="text-sm text-slate-400 mb-2">CPM Médio (Brasil)</p>
                      <p className="text-2xl font-bold text-green-400">$0,50 - $2,00</p>
                      <p className="text-xs text-slate-500 mt-1">por 1.000 visualizações</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg text-center">
                      <p className="text-sm text-slate-400 mb-2">10K views/mês</p>
                      <p className="text-2xl font-bold text-yellow-400">$5 - $20</p>
                      <p className="text-xs text-slate-500 mt-1">receita mensal</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg text-center">
                      <p className="text-sm text-slate-400 mb-2">100K views/mês</p>
                      <p className="text-2xl font-bold text-green-400">$50 - $200</p>
                      <p className="text-xs text-slate-500 mt-1">receita mensal</p>
                    </div>
                  </div>
                  <div className="bg-blue-900/30 border border-blue-500/30 p-4 rounded-lg">
                    <p className="text-sm text-blue-200 mb-2"><strong>💡 Nicho Worship:</strong></p>
                    <p className="text-xs text-slate-300">CPM tende a ser MAIOR (audiência engajada + anunciantes cristãos). Vídeos longos = mais ads = mais receita. Canal com 50K views/mês pode gerar $100-$300.</p>
                  </div>
                </div>

                {/* Monetização Alternativa */}
                <div className="bg-slate-700/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">💡 Monetização Alternativa (antes do YPP)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-green-400" />
                        Doações Diretas
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li>• <strong>Ko-fi / Buy Me a Coffee:</strong> link na descrição</li>
                        <li>• <strong>PayPal/PIX:</strong> "Apoie este ministério"</li>
                        <li>• <strong>Padrim:</strong> assinaturas mensais recorrentes</li>
                        <li className="text-xs text-slate-400 mt-2">Expectativa: 1-2% da audiência doa. 1.000 inscritos = 10-20 doadores ($50-200/mês)</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <Music className="w-5 h-5 text-purple-400" />
                        Produtos Digitais
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li>• <strong>Playlists premium:</strong> Gumroad/Hotmart</li>
                        <li>• <strong>Pacotes de música:</strong> para uso em igrejas</li>
                        <li>• <strong>Curso:</strong> "Como criar worship music com IA"</li>
                        <li className="text-xs text-slate-400 mt-2">Potencial: $500-2.000/mês com produtos bem posicionados</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Direitos Autorais */}
                <div className="bg-yellow-900/30 border border-yellow-500/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">⚠️ IMPORTANTE: Direitos Autorais com Suno AI</h3>
                  <div className="space-y-3 text-slate-200">
                    <p className="flex items-start gap-3">
                      <span className="text-2xl">📋</span>
                      <span><strong>Plano Pro do Suno AI é obrigatório para monetização.</strong> Plano gratuito NÃO permite uso comercial. Custo: ~$10/mês.</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-2xl">✅</span>
                      <span>Com plano Pro, você possui direitos comerciais completos. Pode monetizar no YouTube sem problemas.</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-2xl">🎵</span>
                      <span>Declare na descrição: "Música gerada com IA (Suno AI) sob licença comercial." Transparência evita problemas.</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-2xl">🚫</span>
                      <span>Evite prompts que mencionem artistas reais. Crie estilo original ("peaceful piano worship" em vez de "like Hillsong").</span>
                    </p>
                  </div>
                </div>

                {/* Checklist Final */}
                <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">✅ Checklist: Antes de Aplicar ao YPP</h3>
                  <div className="space-y-2 text-slate-200">
                    <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-800/30 p-2 rounded">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>✓ 1.000+ inscritos alcançados</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-800/30 p-2 rounded">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>✓ 4.000+ horas assistidas nos últimos 12 meses</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-800/30 p-2 rounded">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>✓ Assinatura Pro do Suno AI ativa</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-800/30 p-2 rounded">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>✓ Canal segue Diretrizes da Comunidade (sem strikes)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-800/30 p-2 rounded">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>✓ Autenticação em 2 fatores ativada</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-800/30 p-2 rounded">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>✓ Conta AdSense criada e vinculada</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-800/30 p-2 rounded">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>✓ Todos os vídeos possuem declaração de fonte na descrição</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-800/30 p-2 rounded">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>✓ Conteúdo apropriado para anunciantes (advertiser-friendly)</span>
                    </label>
                  </div>
                  <div className="mt-6 bg-green-900/30 border border-green-500/30 p-4 rounded-lg">
                    <p className="text-green-300 font-semibold mb-2">🎉 Tudo pronto?</p>
                    <p className="text-sm text-slate-200">Acesse YouTube Studio → Monetização → Aplicar. Análise leva 1-30 dias. Continue postando durante a análise!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="card text-center mt-8 bg-gradient-to-r from-slate-800/50 to-purple-900/30">
          <h3 className="text-xl font-bold text-white mb-3">🎯 Lembre-se:</h3>
          <div className="space-y-2 text-slate-300">
            <p className="text-lg"><strong>Consistência &gt; Perfeição</strong></p>
            <p>Publicar regularmente com qualidade boa é melhor que esperar perfeição.</p>
            <p className="text-lg mt-4"><strong>Paciência + Estratégia = Sucesso</strong></p>
            <p>Crescimento orgânico leva tempo, mas é sustentável e valioso.</p>
            <p className="text-lg mt-4"><strong>Dados não mentem</strong></p>
            <p>Deixe o YouTube Analytics guiar suas decisões. Teste, mede, ajuste.</p>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-600">
            <p className="text-sm text-slate-400">
              Este plano foi criado especificamente para <strong className="text-purple-400">@agnussound</strong>
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Marque as tarefas conforme progride. Revise semanalmente. Ajuste conforme necessário.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
