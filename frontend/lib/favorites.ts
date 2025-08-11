export interface FavoriteDisease {
  id: string;
  name: string;
  category: string;
  dateAdded: Date;
}

class FavoritesManager {
  private static readonly STORAGE_KEY = 'docomax-favorite-diseases';

  static getFavorites(): FavoriteDisease[] {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.map((fav: any) => ({
          ...fav,
          dateAdded: new Date(fav.dateAdded)
        }));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
    return [];
  }

  static saveFavorites(favorites: FavoriteDisease[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  }

  static isFavorite(diseaseId: string): boolean {
    const favorites = this.getFavorites();
    return favorites.some(fav => fav.id === diseaseId);
  }

  static addFavorite(diseaseId: string, diseaseName: string, category: string): void {
    const favorites = this.getFavorites();
    if (!this.isFavorite(diseaseId)) {
      const newFavorite: FavoriteDisease = {
        id: diseaseId,
        name: diseaseName,
        category,
        dateAdded: new Date()
      };
      favorites.push(newFavorite);
      this.saveFavorites(favorites);
    }
  }

  static removeFavorite(diseaseId: string): void {
    const favorites = this.getFavorites();
    const filtered = favorites.filter(fav => fav.id !== diseaseId);
    this.saveFavorites(filtered);
  }

  static toggleFavorite(diseaseId: string, diseaseName: string, category: string): boolean {
    if (this.isFavorite(diseaseId)) {
      this.removeFavorite(diseaseId);
      return false;
    } else {
      this.addFavorite(diseaseId, diseaseName, category);
      return true;
    }
  }

  static getFavoriteIds(): string[] {
    return this.getFavorites().map(fav => fav.id);
  }
}

export default FavoritesManager;