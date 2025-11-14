/**
 * Data loading utility with caching and lazy loading
 * This module provides functions to load data modules dynamically to improve performance
 */

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const dataCache = new Map<string, CacheEntry<any>>();
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

/**
 * Clear old cache entries if they exceed the duration
 */
function isCacheValid(timestamp: number): boolean {
  return Date.now() - timestamp < CACHE_DURATION;
}

/**
 * Load data with caching
 */
export async function loadData<T>(
  key: string,
  loader: () => Promise<T>
): Promise<T> {
  // Check if data is already cached and valid
  const cached = dataCache.get(key);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data as T;
  }

  try {
    const data = await loader();
    dataCache.set(key, {
      data,
      timestamp: Date.now()
    });
    return data;
  } catch (error) {
    console.error(`Failed to load data for key "${key}":`, error);
    // Return cached data even if expired, if available
    if (cached) {
      return cached.data as T;
    }
    throw error;
  }
}

/**
 * Lazy load comprehensive diseases
 */
export async function loadComprehensiveDiseases() {
  return loadData('comprehensiveDiseases', async () => {
    const module = await import('../data/comprehensiveDiseases');
    return module.comprehensiveDiseases;
  });
}

/**
 * Lazy load triage questions
 */
export async function loadTriageQuestions() {
  return loadData('triageQuestions', async () => {
    const module = await import('../data/triageQuestions');
    return module.triageQuestions;
  });
}

/**
 * Lazy load healthcare facilities
 */
export async function loadHealthcareFacilities() {
  return loadData('healthcareFacilities', async () => {
    const module = await import('../data/healthcareFacilities');
    return module.healthcareFacilities;
  });
}

/**
 * Lazy load emergency numbers
 */
export async function loadEmergencyNumbers() {
  return loadData('emergencyNumbers', async () => {
    const module = await import('../data/emergencyNumbers');
    return module.emergencyNumbers;
  });
}

/**
 * Lazy load FAQ data
 */
export async function loadFaqData() {
  return loadData('faqData', async () => {
    const module = await import('../data/faqData');
    return module.faqData;
  });
}

/**
 * Lazy load vaccinations
 */
export async function loadVaccinations() {
  return loadData('vaccinations', async () => {
    const module = await import('../data/vaccinations');
    return module.vaccinations;
  });
}

/**
 * Lazy load medications
 */
export async function loadMedications() {
  return loadData('medications', async () => {
    const module = await import('../data/medications');
    return module.medications;
  });
}

/**
 * Lazy load symptom metadata
 */
export async function loadSymptomMetadata() {
  return loadData('symptomMetadata', async () => {
    const module = await import('../data/symptomMetadata');
    return module;
  });
}

/**
 * Clear all cached data
 */
export function clearDataCache(): void {
  dataCache.clear();
}

/**
 * Prefetch critical data for better UX
 * This should be called after app initialization
 */
export async function prefetchCriticalData(): Promise<void> {
  try {
    await Promise.all([
      loadComprehensiveDiseases(),
      loadTriageQuestions(),
      loadHealthcareFacilities(),
      loadFaqData()
    ]);
  } catch (error) {
    console.warn('Some critical data failed to prefetch:', error);
    // Don't throw - app should work even if prefetch fails
  }
}
