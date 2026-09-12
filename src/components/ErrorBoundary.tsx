import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, MessageSquare } from 'lucide-react';
import { PG_INFO } from '../data/pgData';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Andhra Prince PG App Error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF7F5] flex flex-col items-center justify-center p-6 text-stone-900 text-center font-sans">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-stone-200 shadow-xl space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#722F37]/10 border border-[#722F37]/20 flex items-center justify-center mx-auto text-[#722F37]">
              <AlertCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-black text-stone-950 font-heading">
                Andhra Prince PG
              </h1>
              <p className="text-xs font-bold uppercase tracking-wider text-[#722F37]">
                Sector 126, Raipur Khadar, Noida
              </p>
              <p className="text-sm text-stone-600 pt-2">
                We encountered a temporary display issue while loading the application view. Please reload or contact us directly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#722F37] hover:bg-[#5A252C] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>

              <a
                href={`https://wa.me/${PG_INFO.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20Andhra%20Prince%20PG%20rooms.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Helpline</span>
              </a>
            </div>

            <div className="pt-4 border-t border-stone-100 text-xs text-stone-500">
              Direct Phone Call:{' '}
              <a href={`tel:${PG_INFO.phone}`} className="font-bold text-[#722F37] hover:underline">
                {PG_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
