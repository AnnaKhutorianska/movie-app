
import { getGenresMovie, getGenresTV } from '@/services/Api'
import { GenrePayload } from '@/types/state'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const genresFetch = createAsyncThunk(
  'genresTV/fetch',
  async () => {
    try {
      const response = await Promise.all([getGenresMovie(), getGenresTV()])
      
      return response as [GenrePayload, GenrePayload]
    } catch (error) {
      throw error
    }
  }
)
