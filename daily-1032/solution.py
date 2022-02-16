# To view the problem this solution belongs to and understand the solution better, read the README.

def IsToeplitzMatrix(matrix):

    # We go through the whole matrix except the last row and column since there's no reason to
    for i in range(len(matrix) - 1):
        for j in range(len(matrix[i]) - 1):
            # If the value in the index we're checking is not equal to it's diagonal going down and to the right, we return false
            if(matrix[i][j] != matrix[i+1][j+1]):
                return False

    # If every value checks out, the matrix is Toeplitz and we return true
    return True

toeplizMatrix = [[1, 2, 3, 4, 8],
                [5, 1, 2, 3, 4],
                [4, 5, 1, 2, 3],
                [7, 4, 5, 1, 2]]

notToeplizMatrix = [[1, 2, 3, 4, 8],
                [5, 1, 2, 5, 4],
                [4, 5, 1, 2, 3],
                [7, 3, 5, 1, 2]]

print(IsToeplitzMatrix(toeplizMatrix))
print(IsToeplitzMatrix(notToeplizMatrix))

