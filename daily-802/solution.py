import random

# To view the problem this solution belongs to and understand the solution better, read the README.

def GetNumberFromProbabilities(numbers, probabilities):
    summedProbabilities = [0]

    # We create the summed probabilities array
    for i in range(len(probabilities)):
        if i == 0: 
            summedProbabilities[i] = probabilities[i]
        else:
            summedProbabilities.append(summedProbabilities[i - 1] + probabilities[i])
    
    # We generate a random float between 0 and 1 uniformly
    randomFloat = random.uniform(0,1)
    
    # We compare the generated number to the values in the summed probabilities array, allowing us to find the index corresponding to the chosen number
    for j in range(len(summedProbabilities)):
        # For the first check, we only need to check if the generated float is lower than our first element (aka between 0 and our first element)
        if j == 0:
            if randomFloat < summedProbabilities[j]:
                return numbers[j]
        elif randomFloat <= summedProbabilities[j] and randomFloat > summedProbabilities[j-1]:
            return numbers[j]
        
    return -1


numbers = [1,8,9,12,20]
probabilities = [0.1,0.5,0.1,0.05,0.25]

print(GetNumberFromProbabilities(numbers,probabilities))