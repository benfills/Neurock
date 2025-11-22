export type ProbeType = 'mood' | 'attention' | 'memory' | 'fatigue';
export interface Probe {
    id: string; // uuid
    type: ProbeType;
    value: number; // 0..100
    timestamp: number; // epoch ms
    context?: string; // optional short note / task id
    source?: 'manual' | 'auto' | 'pomodoro';
}
export interface BaselineStats {
    type: ProbeType;
    count: number;
    mean: number;
    sd: number;
    lastUpdated: number;
}
